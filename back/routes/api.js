var express = require('express');
var router = express.Router();
var opinionesModel = require('./../models/opinionesModel');

router.get('/opiniones', async function (req, res, next) {
    let opiniones = await opinionesModel.getOpiniones();

    opiniones = opiniones.map(opiniones => {
        return {...opiniones}
    });

    res.json(opiniones);
});

module.exports = router;