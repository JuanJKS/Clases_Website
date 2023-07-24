var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout2'
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout2'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre_usuario = data.usuario;

      res.redirect('/admin/opiniones');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout2',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
