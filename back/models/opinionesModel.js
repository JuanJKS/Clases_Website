var pool = require('./bd');

async function getOpiniones() {
    var query = 'SELECT * FROM opiniones ORDER BY id_op ASC';
    var rows = await pool.query(query);
    return rows;
}

async function insertOpinion(obj) {
    try {
        var query = 'INSERT INTO opiniones SET ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteOpinionById(id) {
    var query = 'DELETE FROM opiniones WHERE id_op = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

/*TRAE NOVEDAD POR ID PARA LUEGO EDITARLA*/
async function getOpinionById(id) {
    var query = 'SELECT * FROM opiniones WHERE id_op = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*ACTUALIZAR LA OPINIÓN*/
async function modificarOpinionById(obj, id) {
    try {
      var query = 'UPDATE opiniones SET ? WHERE id_op = ?';
      var rows = await pool.query(query, [obj, id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

module.exports = { getOpiniones, insertOpinion, deleteOpinionById, getOpinionById, modificarOpinionById };