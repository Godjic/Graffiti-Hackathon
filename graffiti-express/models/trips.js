'use strict';
module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define('trips', {
    route_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    trip_id: DataTypes.INTEGER,
    trip_headsign: DataTypes.STRING,
    direction_id: DataTypes.INTEGER
  }, {});
  trips.associate = function(models) {
    // associations can be defined here
  };
  return trips;
};