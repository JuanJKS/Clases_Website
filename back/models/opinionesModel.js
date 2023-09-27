const pool = require('./bd');

const getOpiniones = async () => {
  const query = 'SELECT * FROM opiniones ORDER BY id_op ASC';
  const rows = await pool.query(query);
  return rows;
}

const insertOpinion = async (obj) => {
  try {
    const query = 'INSERT INTO opiniones SET ?';
    const rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const deleteOpinionById = async (id) => {
  const query = 'DELETE FROM opiniones WHERE id_op = ?';
  const rows = await pool.query(query, [id]);
  return rows;
}

/*TRAE NOVEDAD POR ID PARA LUEGO EDITARLA*/
const getOpinionById = async (id) => {
  const query = 'SELECT * FROM opiniones WHERE id_op = ?';
  const rows = await pool.query(query, [id]);
  return rows[0];
}

/*ACTUALIZAR LA OPINIÓN*/
const modificarOpinionById = async (obj, id) => {
  try {
    const query = 'UPDATE opiniones SET ? WHERE id_op = ?';
    const rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { getOpiniones, insertOpinion, deleteOpinionById, getOpinionById, modificarOpinionById };