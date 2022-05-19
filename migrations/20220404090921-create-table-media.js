'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('medias', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('medias', { 
      id: {
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at :{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at :{
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('medias');
     */
    await queryInterface.dropTable('medias');

  }
};
