const Sequelize = require('sequelize');
const config = require('./config');

// Models
const Assisted = require('./models/Assisted');
const Author = require('./models/Author');
const Employee = require('./models/Employee');
const GeographicLocalization = require('./models/GeographicLocation');

const db = {};

const sequelize = new Sequelize(config);

// Initializing all models
const models = [Assisted, Author, Employee, GeographicLocalization];

models.forEach((model) => {
  const modelInstance = model(sequelize, Sequelize.DataTypes);
  db[modelInstance.name] = modelInstance;
});

// Adding associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
