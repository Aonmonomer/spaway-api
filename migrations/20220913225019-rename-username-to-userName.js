'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'username', 'userName')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'userName', 'username')
  }
}
