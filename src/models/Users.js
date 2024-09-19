const { type } = require("os");
const { DataTypes } = require("sequelize");
const { toDefaultValue } = require("sequelize/lib/utils");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        validate: { isUUID: 4 },
      },

      type: {
        type: DataTypes.ENUM,
        values: ["professional", "company", "none"],
        defaultValue: "professional",
        allowNull: false,
      },
      
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user", "super_admin"],
        defaultValue: "user",
        allowNull: false,
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        unique: true
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      genre: {
        type: DataTypes.ENUM,
        values: ["male", "female", "other"],
        defaultValue: "other",
        allowNull: false,
      },

      profile_image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://res.cloudinary.com/dz9smi3nc/image/upload/v1686530902/shop-mugs/3106921_i0bgb6.png",
        validate: {
          isUrl: true,
        },
      },

      phone_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      code_area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      visibility: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      is_banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      location: {
        type: DataTypes.JSON, // Usa JSON para MySQL
        allowNull: true,
        validate: {
          isValidLocation(value) {
            if (value) {
              const { address, city, state, country } = value;
              if (address) {
                const { address_name, address_number } = address;
                if (
                  typeof address_name !== "string" ||
                  typeof address_number !== "string"
                ) {
                  throw new Error("Invalid address format");
                }
              }
              if (
                typeof city !== "string" ||
                typeof state !== "string" ||
                typeof country !== "string"
              ) {
                throw new Error("Invalid location format");
              }
            }
          },
        },
      },


      status: {
        type: DataTypes.ENUM,
        values: ["active", "inactive", "deleted"],
        defaultValue: "active",
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
