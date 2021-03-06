'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      artist: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      songList: {
        allowNull: false,
        type: Sequelize.STRING(1055)
      },
      likeCount: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.NUMERIC(2, 1)
      },
      url: {
        type: Sequelize.STRING(2000)
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
    return queryInterface.dropTable('Albums');
  }
};
