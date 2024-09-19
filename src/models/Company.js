const { type } = require("os");
const { DataTypes } = require("sequelize");
const { toDefaultValue } = require("sequelize/lib/utils");
const { validate } = require("uuid");
const { category_company, typeCompanyEnum } = require("./enums/companies/companies.enum");

module.exports = (sequelize) => {
  sequelize.define(
    "Company",
   {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: { isUUID: 4 },
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    category: {
      type: DataTypes.ENUM(...category_company),
      allowNull: false,
      defaultValue: "Otra",
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    billing: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    search_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    contact_card: {
      type: DataTypes.JSON,
      validate: {
        isValidContact(value) {
          if (value) {
            const { linkedln, website, email } = value;
            if (
              typeof linkedln !== "string" ||
              typeof website !== "string" ||
              typeof email !== "string"
            ) {
              throw new Error("Invalid contact format");
            }
          }
        },
      },
    },
    
    aditional_info: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    provided_benefits: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
    },
    type_company: {
      type: DataTypes.ENUM(...typeCompanyEnum),
      allowNull: false,
      defaultValue: "Otra",
    },
    website: {
      type: DataTypes.STRING,
    },
    release_date: {
      type: DataTypes.DATE,
    },
   },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
