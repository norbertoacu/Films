module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("pelicula", {
      titulo: {
        type: Sequelize.STRING
      },
       duracion: {
        type: Sequelize.INTEGER
      },
      formato: {
        type: Sequelize.STRING
      }


    });
  
    return Pelicula;
  }