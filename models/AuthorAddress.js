module.exports = (sequelize, DataTypes) => {
  const AuthorAddress = sequelize.define('authorAddress', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    authorID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'author_ID',
      references: {
        model: 'author',
        key: 'id',
      },
    },
    street: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  });

  return AuthorAddress;
};
