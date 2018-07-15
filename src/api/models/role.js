module.exports = function (sequelize, DataTypes) {
  return sequelize.define('role', {
    role_id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    timestamps: false
  })
}
