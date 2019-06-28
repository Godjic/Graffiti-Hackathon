'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stop_id: {
        type: Sequelize.STRING
      },
      stop_code: {
        type: Sequelize.INTEGER
      },
      stop_name: {
        type: Sequelize.STRING
      },
      stop_lat: {
        type: Sequelize.INTEGER
      },
      stop_lon: {
        type: Sequelize.INTEGER
      },
      location_type: {
        type: Sequelize.INTEGER
      },
      parent_station: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stops');
  }
};