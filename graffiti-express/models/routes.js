'use strict';
module.exports = (sequelize, DataTypes) => {
  const routes = sequelize.define('routes', {
    route_id: DataTypes.STRING,
    route_short_name: DataTypes.STRING,
    route_long_name: DataTypes.STRING
  }, {});
  routes.associate = function(models) {
    // associations can be defined here
  };
  return routes;
};