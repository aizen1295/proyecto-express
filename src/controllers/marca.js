const ctrl = {};
const pool = require('../database');

ctrl.index = async (req, res) => {
	const marca = await pool.query('SELECT * FROM marca');
	res.render('producto/frmMarca', { marca });
};

ctrl.create = async (req, res) => {
	const marca = req.body;
	await pool.query('INSERT INTO marca set ?', [marca]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const marca = await pool.query('SELECT * FROM marca WHERE ID = ?', [id]);
	res.json(marca[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const marca = req.body;
	await pool.query('update marca set ? where ID = ?', [marca, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM marca WHERE ID = ?', [id]);
	res.redirect('/marca');
};

module.exports = ctrl;
