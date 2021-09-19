/* Importar dependencias de node */
const express = require ("express");
const path = require("path");
const fs = require ("fs");

/* Creación de server */
const server = express();

/* Lectura del formulario front */
server.use(express.urlencoded({
    extended: true
}));

/* Lectura de HTML para CSS y demás asociados */
server.use(express.static("public"));

/* Lectura del server para formato JSON */
server.use(express.json());

/* Carga de HTML en el browser */
server.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
});

/* Envío de solicitud de llenado de solicitud y creación de archivo-objeto JSON */
server.post("/send", (req, res)=>{
    console.log(req.body)
    fs.writeFileSync(path.join(__dirname, "./datos.json"), JSON.stringify(req.body, null, 4));
    res.redirect("/")
});

/* Arrnaca server en prt 5000 */
server.listen(5000, ()=>{
    console.log("Qué pedo...")
});