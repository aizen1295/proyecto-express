const ctrl = {};
const pool = require('../database');

ctrl.index = async (req, res) => {
	const rol = await pool.query('SELECT * FROM roles');
	res.render('usuario/frmRol', { rol });
};

ctrl.create = async (req, res) => {
	const rol = req.body;
	await pool.query('INSERT INTO roles set ?', [rol]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const rol = await pool.query('SELECT * FROM roles WHERE ID = ?', [id]);
	res.json(rol[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const rol = req.body;
	await pool.query('update roles set ? where ID = ?', [rol, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM roles WHERE ID = ?', [id]);
	res.redirect('/rol');
};

//exportar
module.exports = ctrl;
