var express = require('express');
var router = express.Router();
var opinionesModel = require('../../models/opinionesModel');

/* GET opiniones page. */
router.get('/', async function(req, res, next) {

  var opiniones = await opinionesModel.getOpiniones();

  res.render('admin/opiniones', {
    layout: 'admin/layout',
    persona: req.session.nombre_usuario,
    opiniones
  });
});

/*DISEÑO DE AGREGAR*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

/*INSERTAR LA NOVEDAD*/
router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.opinion != "" && req.body.autor != "" && req.body.zona != "") {
      await opinionesModel.insertOpinion(req.body);
      res.redirect('/admin/opiniones');
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
      console.log(error);
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se cargó el testimonio'
      })
  }
});

/*ELIMINAR LA OPINIÓN*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await opinionesModel.deleteOpinionById(id);
  res.redirect('/admin/opiniones');
});

/*ME TRAE LA VISTA PARA LA MODIFICACIÓN; FORMULARIO CON LOS DATOS CARGADOS DE LA OPINION A EDITAR*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var opinion = await opinionesModel.getOpinionById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    opinion
  })
});

/*ACTUALIZAR LA OPINIÓN*/
router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      opinion: req.body.opinion,
      autor: req.body.autor,
      zona: req.body.zona
    };
    
    await opinionesModel.modificarOpinionById(obj, req.body.id);
    res.redirect('/admin/opiniones');
  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó el testimonio'
    })
  }
});

module.exports = router;