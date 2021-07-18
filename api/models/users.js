'use strict';


const bcrypt = require("bcryptjs");


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The Username you entered already exists'
      },
      validate: {
        notNull: {
          msg: 'Username is required'
        },
        notEmpty: {
          msg: 'Please provide a Username'
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The email address you entered already exists'
      },
      validate: {
        isEmail: {
          msg: 'Please provide valid email address'
        }, 
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Please provide your email address'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull: {
            msg: 'Password is required'
          }
      },
      /***
       * hashed password before persisting the user to the database
       */
      set(val) {
        const hashedPassword = bcrypt.hashSync(val, 10);
        this.setDataValue("password", hashedPassword);
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};