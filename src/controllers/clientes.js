const ctrl = {};
const pool = require('../database');

ctrl.index = async (req, res) => {
	const cliente = await pool.query(
		'SELECT c.ID, nombres, apellidos,N_documento, tc.descripcion FROM clientes c INNER JOIN persona p ON c.id_persona = p.ID INNER JOIN tipo_cliente tc ON tc.ID = c.id_tipo_cliente'
	);
	const persona = await pool.query('SELECT * FROM persona ');
	const tipo_cliente = await pool.query('SELECT * FROM tipo_cliente ');
	res.render('persona/frmclientes', { cliente, persona, tipo_cliente });
};

ctrl.create = async (req, res) => {
	const cliente = req.body;
	await pool.query('INSERT INTO clientes set ?', [cliente]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const cliente = await pool.query('SELECT * FROM clientes WHERE ID = ?', [id]);
	res.json(cliente[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const cliente = req.body;
	await pool.query('update clientes set ? where ID = ?', [cliente, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM clientes WHERE ID = ?', [id]);
	res.redirect('/clientes');
};

//exportar
module.exports = ctrl;
