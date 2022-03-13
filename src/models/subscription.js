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
      },
    },
    {
      sequelize,
      tableName: "subscriptions",
      modelName: "Subscription",
    }
  );
  return Subscription;
};
