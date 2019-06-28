'use strict';
module.exports = (sequelize, DataTypes) => {
  const stops = sequelize.define('stops', {
    stop_id: DataTypes.STRING,
    stop_code: DataTypes.INTEGER,
    stop_name: DataTypes.STRING,
    stop_lat: DataTypes.INTEGER,
    stop_lon: DataTypes.INTEGER,
    location_type: DataTypes.INTEGER,
    parent_station: DataTypes.STRING
  }, {});
  stops.associate = function(models) {
    // associations can be defined here
  };
  return stops;
};