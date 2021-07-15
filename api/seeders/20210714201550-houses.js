module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Houses', [{
      houseName: 'Stefan House',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      houseName: 'Kevin House',
      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      houseName: 'Kia House',
     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      houseName: 'Shed'
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Houses', null, {});
  }
};