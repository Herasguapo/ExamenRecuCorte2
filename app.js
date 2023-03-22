// Importar los módulos necesarios
const http = require("http"); // Módulo HTTP proporciona funcionalidades para crear un servidor HTTP.
const express = require("express"); // Framework web de Node.js que facilita la creación de aplicaciones web y APIs.
const bodyparser = require("body-parser"); // Middleware que analiza el cuerpo de las solicitudes HTTP entrantes.

// Importar las rutas definidas en el archivo index.js dentro de la carpeta router
const misRutas = require("./router/index"); // Importa el archivo index.js que contiene las rutas de la aplicación.
const path = require("path"); // Módulo que proporciona utilidades para trabajar con rutas de archivos y directorios.

// Crear una instancia de Express
const app = express();

// Establecer el motor de plantillas como EJS / Configura el motor de plantillas EJS para que sea utilizado en la aplicación.
app.set("view engine","ejs");

// Establecer la carpeta pública para servir archivos estáticos
app.use(express.static(__dirname + "/public")); 

// Analizar los cuerpos de las solicitudes HTTP
app.use(bodyparser.urlencoded({ extended: true })); 

// Registrar el motor de plantillas EJS para la extensión html
app.engine("html", require("ejs").renderFile); 

// Usar las rutas definidas en misRutas
app.use(misRutas); 

// Agregar un middleware para manejar solicitudes no encontradas (404)
app.use((req, res, next) => { 
res.status(404).sendFile(__dirname + "/public/error.html"); // Envía un archivo HTML para indicar que la página solicitada no se ha encontrado.
});

// Iniciar el servidor en el puerto 3000 y mostrar un mensaje en la consola
const puerto = 3000; 
app.listen(puerto, () => { 
console.log("Iniciando Puerto del Examen Recu Corte 2");
});