"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("subscriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      aimed_audience: {
        type: DataTypes.STRING,
      },
      users_limit: {
        type: DataTypes.INTEGER,
      },
      profile_limit: {
        type: DataTypes.INTEGER,
      },
      advance_feature: {
        type: DataTypes.STRING,
      },
      popularity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("subscriptions");
  },
};
