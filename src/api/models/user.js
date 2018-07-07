module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'This is not valid Firstname'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'This is not valid Lastname'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i,
          msg: 'This is not valid username'
        },
        isUniqueUsername (value, next) {
          sequelize.query('SELECT count(1) as counter FROM users WHERE username = ? ', {
            replacements: [value],
            type: sequelize.QueryTypes.SELECT
          }).then(users => {
            if (users[0].counter > 0) {
              next('Usename is already in use')
            } else {
              next()
            }
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPasswordNotNull (value, next) {
          if (value !== undefined) {
            if (value.length > 6) {
              next()
            } else {
              next('This is short password')
            }
          } else {
            next('This is not valid password')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'This is not valid email'
        },
        isUniqueEmail (value, next) {
          sequelize.query('SELECT count(1) as counter FROM users WHERE email = ? ', {
            replacements: [value],
            type: sequelize.QueryTypes.SELECT
          }).then(users => {
            if (users[0].counter > 0) {
              next('Email is already in use')
            } else {
              next()
            }
          })
        }
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
}
