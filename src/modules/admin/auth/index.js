const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const config = require('../../../config');
const { employee } = require('../../database');
const errors = require('../../errors');

const initialize = passport.initialize();

const configStrategies = () => {
  // JSON WEB TOKENS STRATEGIES
  passport.use(
    'adminJwt',
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
        secretOrKey: config.get('authentication.jwtSecret'),
      },
      async (payload, done) => {
        if (payload.aud !== 'gm-web-admin') {
          return done(null, false);
        }
        // Find the user specified in token
        let employeeModel;
        try {
          employeeModel = await employee.findOne({
            where: { id: payload.sub },
            attributes: ['id'],
          });
        } catch (err) {
          return done(new errors.DatabaseError(err));
        }
        // If user doesn't exists, handle it
        if (!employeeModel) {
          return done(null, false);
        }
        const user = employeeModel.get({ plain: true });
        // Otherwise, return the user
        return done(null, user);
      },
    ),
  );

  // LOCAL STRATEGY
  passport.use(
    'adminLocal',
    new LocalStrategy(async (username, password, done) => {
      // Find the user given the email
      let employeeModel;
      try {
        employeeModel = await employee.findOne({
          where: { login: username },
          attributes: ['id', 'fullName', 'password'],
        });
      } catch (err) {
        return done(new errors.DatabaseError(err));
      }
      // If not, handle it
      if (!employeeModel) {
        return done(null, false);
      }
      // Check if the password is correct
      const userObj = employeeModel.get({ plain: true });

      if (!(await bcrypt.compare(password, userObj.password))) {
        return done(null, false);
      }
      delete userObj.password;
      return done(null, userObj);
    }),
  );
};

const secureLocal = passport.authenticate('adminLocal', { session: false });
const secureJwt = passport.authenticate('adminJwt', { session: false });

module.exports = {
  initialize,
  configStrategies,
  secureLocal,
  secureJwt,
};
