const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const config = require('../../../config');
const { assisted } = require('../../database');
const errors = require('../../errors');

const initialize = passport.initialize();

const configStrategies = () => {
  // JSON WEB TOKENS STRATEGIES
  passport.use(
    'assistedJwt',
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
        secretOrKey: config.get('authentication.jwtSecret'),
      },
      async (payload, done) => {
        if (payload.aud !== 'gm-app-assisted') {
          return done(null, false);
        }
        // Find the user specified in token
        let assistedModel;
        try {
          assistedModel = await assisted.findOne({
            where: { id: payload.sub },
            attributes: ['id'],
          });
        } catch (err) {
          return done(new errors.DatabaseError(err));
        }
        // If user doesn't exists, handle it
        if (!assistedModel) {
          return done(null, false);
        }
        const user = assistedModel.get({ plain: true });
        // Otherwise, return the user
        return done(null, user);
      },
    ),
  );

  // LOCAL STRATEGY
  passport.use(
    'assistedLocal',
    new LocalStrategy(async (username, password, done) => {
      // Find the user given the email
      let assistedModel;
      try {
        assistedModel = await assisted.findOne({
          where: { cpf: username },
          attributes: ['id', 'fullName', 'password'],
        });
      } catch (err) {
        return done(new errors.DatabaseError(err));
      }
      // If not, handle it
      if (!assistedModel) {
        return done(null, false);
      }
      // Check if the password is correct
      const userObj = assistedModel.get({ plain: true });

      if (!(await bcrypt.compare(password, userObj.password))) {
        return done(null, false);
      }
      delete userObj.password;
      return done(null, userObj);
    }),
  );
};

const secureLocal = passport.authenticate('assistedLocal', { session: false });
const secureJwt = passport.authenticate('assistedJwt', { session: false });

module.exports = {
  initialize,
  configStrategies,
  secureLocal,
  secureJwt,
};
