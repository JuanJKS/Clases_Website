const express = require('express');
const router = express.Router();
const opinionesModel = require('../../models/opinionesModel');

/*ME TRAE LA VIStA DE TODAS LAS OPINIONES*/
router.get('/', async (req, res, next) => {
  const opiniones = await opinionesModel.getOpiniones();
  res.render('admin/opiniones', {
    layout: 'admin/layout',
    persona: req.session.nombre_usuario,
    opiniones
  });
});

/*DISEÑO DE AGREGAR*/
router.get('/manage', (req, res, next) => {
  res.render('admin/manage', {
    layout: 'admin/layout'
  });
});

/*ME TRAE LA VISTA PARA LA MODIFICACIÓN; FORMULARIO CON LOS DATOS CARGADOS DE LA OPINION A EDITAR*/
router.get('/manage/:id', async (req, res, next) => {
  const id = req.params.id;
  const opinion = await opinionesModel.getOpinionById(id);
  res.render('admin/manage', {
    layout: 'admin/layout',
    opinion
  })
});

/*MANEJA EL AGREGADO DE UNA NUEVA OPINIÓN O LA MODIFICACIÓN DE UNA YA EXISTENTE*/
router.post('/manage', async (req, res, next) => {
  const id = req.body.id;
  let opinion;

  try {
    if (id) {
      opinion = await opinionesModel.getOpinionById(id);
    }

    if (req.body.opinion == '' || req.body.autor == '' || req.body.zona == '') {
      res.render('admin/manage', {
        layout: 'admin/layout',
        opinion: opinion,
        error: true,
        message: 'Todos los campos son requeridos'
      });
      return;
    }

    if (id) {
      delete req.body.id;
      await opinionesModel.modificarOpinionById(req.body, id);
      res.redirect('/admin/opiniones');
    } else {
      await opinionesModel.insertOpinion(req.body);
      res.redirect('/admin/opiniones');
    }
  } catch (error) {
      console.log(error);
      res.render('admin/manage', {
        layout: 'admin/layout',
        opinion: opinion,
        error: true,
        message: id ? 'No se modificó el testimonio' : 'No se cargó el testimonio'
      })
  }
});

/*ELIMINAR LA OPINIÓN*/
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;
  await opinionesModel.deleteOpinionById(id);
  res.redirect('/admin/opiniones');
});

module.exports = router;