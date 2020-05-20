const ctrl = {};
const pool = require('../database');

ctrl.index = (req, res) => {
	res.render('producto/frmPedido');
};

ctrl.create = async (req, res) => {
	const pedido = req.body;
	await pool.query('INSERT INTO entradas_factura set ?', [pedido]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const pedido = await pool.query('SELECT * FROM entradas_factura WHERE ID = ?', [id]);
	res.json(pedido[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const pedido = req.body;
	await pool.query('update entradas_factura set ? where ID = ?', [pedido, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM entradas_factura WHERE ID = ?', [id]);
	res.redirect('/pedido');
};

module.exports = ctrl;
