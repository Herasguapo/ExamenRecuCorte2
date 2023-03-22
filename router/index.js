// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
  const params = {
    NumContrato: req.query.NumContrato,
    Nombre: req.query.Nombre,
    NivelDeEstudios: req.query.NivelDeEstudios,
    PagoDiario: req.query.PagoDiario,
    DiasTrabajados: req.query.DiasTrabajados,
    SubTotal: req.query.SubTotal,
    Total: req.query.Total
};
res.render("paginaSalida.html", params);
});

router.post("/paginaSalida", (req, res) => {
res.render("paginaSalida.html", params);
});

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;