const pool = require('./bd');
const md5 = require('md5');

const getUserByUsernameAndPassword = async (user, password) => {
    try {
        const query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? limit 1';
        const rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword };