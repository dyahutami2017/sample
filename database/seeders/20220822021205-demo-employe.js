'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const employes = [];
   for(let i = 0; i < 100; i++){
     employes.push({
       employe_name: `employe ${i}`,
       employe_role: 'analis',
       employe_phone_number: '0812345678',
       employe_address: 'Jl. Kebon Kacang No.1',
       createdAt: new Date(),
       updatedAt: new Date()
     })
   }
   return queryInterface.bulkInsert('Employes', employes, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Employes', null, {
      truncate: true
    });
  }
};
