const express = require('express');
const router = express.Router();
const usuariosModel = require('./../../models/usuariosModel');

router.get('/', (req, res, next) => {
  res.render('admin/login', {
    layout: 'admin/layout2'
  });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout2'
  });
});

router.post('/', async (req, res, next) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;
    const data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

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
