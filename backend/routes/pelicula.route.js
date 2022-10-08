module.exports = app => {
    const Peliculas = require("../controllers/pelicula.controller");
  
    var router = require("express").Router();
  

    // Create a new Pelicula
    router.post("/", Peliculas.create);
  
    // Retrieve all Peliculas
    router.get("/", Peliculas.findAll);
  
    // Retrieve a single Pelicula with id
    router.get("/:id", Peliculas.findOne);
  
    // Update a Pelicula with id
    router.put("/:id", Peliculas.update);
  
    // Delete a Pelicula with id
    router.delete("/:id", Peliculas.delete);
  
  //  app.use("/api/bicycles", router);
  app.use("/api/peliculas", router);
  }