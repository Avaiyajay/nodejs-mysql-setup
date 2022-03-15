"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Subscription.init(
    {
      type: {
        type: DataTypes.STRING,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    {
      sequelize,
      tableName: "subscriptions",
      modelName: "Subscription",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Subscription;
};
