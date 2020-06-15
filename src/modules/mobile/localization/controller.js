const service = require('./service');

module.exports = {
  localization: async (req, res, next) => {
    const information = req.body;

    try {
      await service.mantain(information, req.user);
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  },
};
