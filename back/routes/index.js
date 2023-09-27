const express = require('express');
const router = express.Router();

/*REDIRIGE AL LAYOUT DE INICIO DE SESIÓN*/
router.get('/', (req, res, next) => {
  res.redirect('/admin/login');
});

module.exports = router;
