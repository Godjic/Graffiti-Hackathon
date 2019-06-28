'use strict';
module.exports = (sequelize, DataTypes) => {
  const stop_times = sequelize.define('stop_times', {
    trip_id: DataTypes.INTEGER,
    arrival_time: DataTypes.INTEGER,
    departure_time: DataTypes.INTEGER,
    stop_id: DataTypes.INTEGER,
    stop_sequence: DataTypes.INTEGER
  }, {});
  stop_times.associate = function(models) {
    // associations can be defined here
  };
  return stop_times;
};