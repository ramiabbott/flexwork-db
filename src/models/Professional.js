const { timeStamp } = require("console");
const { type } = require("os");
const { DataTypes, UUIDV4 } = require("sequelize");
const { toDefaultValue } = require("sequelize/lib/utils");
const professional = require("./enums/professionals/professional-arrays");

module.exports = (sequelize) => {
  sequelize.define(
    "professional",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: { isUUID: 4 },
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      about_me: {
        type: DataTypes.TEXT,
      },
      hourly_rate: {
        type: DataTypes.FLOAT,
      },
      contact: {
        type: DataTypes.JSON,
        validate: {
          isValidContact(value) {
            if (value) {
              const { linkedln, github, behance, website } = value;
              if (
                typeof linkedln !== "string" ||
                typeof github !== "string" ||
                typeof behance !== "string" ||
                typeof website !== "string"
              ) {
                throw new Error("Invalid contact format");
              }
            }
          },
        },
      },
      profession: {
        type: DataTypes.ENUM(...professional),
        defaultValue: "Ninguno",
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: ["Disponible", "Trabajando"],
        defaultValue: "Disponible",
        allowNull: false,
      },
      portfolio: {
        type: DataTypes.JSON,
        validate: {
          isValidPortfolio(value) {
            if (value) {
              const { url_image, title, description } = value;
              if (
                typeof url_image !== "string" ||
                typeof title !== "string" ||
                typeof description !== "string"
              ) {
                throw new Error("Invalid portfolio format");
              }
            }
          },
        },
      },
    },

    {
      timestamps: true,
      paranoid: true,
    }
  );
};
