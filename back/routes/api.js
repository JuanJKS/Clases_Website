const express = require('express');
const router = express.Router();
const opinionesModel = require('./../models/opinionesModel');

router.get('/opiniones', async (req, res, next) => {
    let opiniones = await opinionesModel.getOpiniones();

    opiniones = opiniones.map(opiniones => ({...opiniones}));
    res.json(opiniones);
});

module.exports = router;