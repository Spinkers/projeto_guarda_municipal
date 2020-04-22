const bcrypt = require('bcrypt');
const { assisted } = require('../../database');

module.exports = {
  createOne: async (photograph, information) => {
    const {
      fullName,
      cpf,
      street,
      district,
      number,
      cep,
      city,
      state,
      observation,
      password,
    } = information;

    const { filename } = photograph;

    // Verify if already exists
    let assistedModel;
    try {
      assistedModel = await assisted.findOne({
        where: { cpf },
      });
    } catch (err) {
      throw new error(err);
    }
    // If exists, return false
    if (assistedModel) {
      return false;
    }

    // If not exists, creates and return true
    bcrypt.hash(password, 12, function(err, hash) {
      assisted.create({
        fullName,
        cpf,
        street,
        district,
        number,
        cep,
        city,
        state,
        observation,
        photograph: filename,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
    });

    return true;
  },
};
