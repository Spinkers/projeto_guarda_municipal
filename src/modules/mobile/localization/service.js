const errors = require('../../errors');
const { geographicLocation } = require('../../database');

module.exports = {
  mantain: async (information, user) => {
    const { position } = information;
    const { id } = user;
    const point = { type: 'Point', coordinates: position };

    // Verify if already exists
    let geographicLocationModel;
    try {
      geographicLocationModel = await geographicLocation.findOne({
        where: { assistedID: id },
      });
    } catch (err) {
      throw new errors.DatabaseError(err);
    }
    // If exists, update.
    if (geographicLocationModel) {
      try {
        await geographicLocation.update(
          {
            position: point,
          },
          { where: { assistedID: id } },
        );
        return true;
      } catch (err) {
        throw new errors.DatabaseError(err);
      }
    }

    // If not exists, creates and return true
    geographicLocation.create({
      assistedID: id,
      position: point,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });

    return true;
  },
};
