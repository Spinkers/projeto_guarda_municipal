const db = require('./modules/database');
const log = require('./modules/log');
const mobileAuth = require('./modules/mobile/auth');
const webAuth = require('./modules/admin/auth');

module.exports = async (app) => {
  app.use(mobileAuth.initialize, webAuth.initialize);
  mobileAuth.configStrategies();
  webAuth.configStrategies();

  try {
    // Testing DB connection
    await db.sequelize.authenticate();
    log.info('Connection to the database has been established successfully.');
  } catch (err) {
    log.error(err, 'Unable to connect to the database: ');
    throw err;
  }
};
