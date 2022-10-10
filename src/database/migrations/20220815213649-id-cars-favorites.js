"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "cars_favorites", {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      defaultValue: [],
      allowNull: true
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "cars_favorites")
  }
}
