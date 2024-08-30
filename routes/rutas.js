// routes/index.js
const express = require('express');
const router = express.Router();
const { fecha, hora, saludo } = require('../test/fecha-hora');

router.use(saludo); 
router.use(fecha);  
router.use(hora);   

router.get('/', (req, res) => {
    console.log('La fecha del dia de la consulta es ' + req.fechaActual, ' y la hora es ' + req.horaActual);
    res.send('Consulta realizada, verifica en la consola.');
});

module.exports = router;