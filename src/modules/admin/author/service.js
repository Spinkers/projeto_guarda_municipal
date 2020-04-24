const { author } = require('../../database');
const errors = require('../../errors');

module.exports = {
  createOne: async (photograph, information) => {
    const {
      fullName,
      cpf,
      observation,
      dvc,
      hasGun,
      cep,
      number,
      street,
      district,
      city,
      state,
    } = information;

    const { filename } = photograph;

    // Verify if already exists
    let authorModel;
    try {
      authorModel = await author.findOne({
        where: { cpf },
      });
    } catch (err) {
      throw new errors.DatabaseError(err);
    }
    // If exists, return false
    if (authorModel) {
      return false;
    }

    // If not exists, creates and return true

    author.create({
      fullName,
      cpf,
      observation,
      dvc,
      hasGun,
      cep,
      number,
      street,
      district,
      city,
      state,
      photograph: filename,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });

    return true;
  },
};
