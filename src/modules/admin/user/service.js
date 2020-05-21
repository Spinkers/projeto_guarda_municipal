const bcrypt = require('bcrypt');
const errors = require('../../errors');
const { employee } = require('../../database');

module.exports = {
  createOne: async (information) => {
    const { fullName, login, password, email, permissionID } = information;

    // Verify if already exists
    let employeeModel;
    try {
      employeeModel = await employee.findOne({
        where: { login },
      });
    } catch (err) {
      throw new errors.DatabaseError(err);
    }
    // If exists, return false
    if (employeeModel) {
      return false;
    }

    // If not exists, creates and return true
    bcrypt.hash(password, 12, function(err, hash) {
      employee.create({
        fullName,
        login,
        email,
        permissionID,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
    });

    return true;
  },
};
