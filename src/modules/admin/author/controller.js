const service = require('./service');

module.exports = {
  register: async (req, res, next) => {
    const photograph = req.file;
    const information = req.body;
    try {
      const response = await service.createOne(photograph, information);
      if (response === false) {
        res.sendStatus(409);
      }
      res.send();
    } catch (err) {
      next(err);
    }
  },
};
