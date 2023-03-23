// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
  const params = {
    Nombre: req.query.Nombre,
    TipoServicio: req.query.TipoServicio,
    Kilowatts: req.query.Kilowatts
};
res.render("paginaEntrada.html", params);
});

router.post("/", (req, res) => {
  const params = {
    Nombre: req.body.Nombre,
    TipoServicio: req.body.TipoServicio,
    Kilowatts: req.body.Kilowatts
};
res.render("paginaSalida.html", params);
});

router.get("/paginaSalida", (req, res) => {
  const params = {
    Nombre: req.query.Nombre,
    TipoServicio: req.query.TipoServicio,
    Kilowatts: req.query.Kilowatts
};
res.render("paginaSalida.html", params);
});



// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;