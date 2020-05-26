const ctrl = {};
const pool = require('../database');

ctrl.index = async (req, res) => {
	const pedido = await pool.query(
		'SELECT ef.ID, ef.fecha, po.ID proveedor, em.ID empleado, pro.Nombre producto, pro.precio_de_compra, ef.cantidad, ef.iva, ef.total, tc.tipo_de_compra FROM entradas_factura ef INNER JOIN empleados em ON em.ID = ef.id_empleados INNER JOIN productos pro ON pro.ID = ef.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN proveedores po ON po.ID = ef.id_proveedor INNER JOIN tipo_de_compra tc ON tc.ID = ef.id_tipo'
	);
	const empleado = await pool.query(
		'SELECT e.ID, p.nombres FROM empleados e INNER JOIN persona p ON p.ID = e.id_persona'
	);
	const producto = await pool.query('SELECT * FROM productos ');
	const proveedor = await pool.query('SELECT * FROM proveedores ');
	const pago = await pool.query('SELECT * FROM tipo_de_compra ');
	res.render('producto/frmPedido', { pedido, empleado, producto, pago, proveedor });
};

ctrl.create = async (req, res) => {
	const pedido = req.body;
	await pool.query('INSERT INTO entradas_factura set ?', [pedido]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const pedido = await pool.query(
		'SELECT ef.ID, fecha, id_proveedor, id_empleados, id_producto, id_tipo, cantidad, iva, total, pro.precio_de_compra FROM entradas_factura ef INNER JOIN productos pro ON pro.ID = ef.id_producto WHERE ef.ID = ?',
		[id]
	);
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

ctrl.cal = async (req, res) => {
	const { id } = req.params;
	const valor = await pool.query('SELECT * FROM productos WHERE ID = ?', [id]);
	res.json(valor[0]);
};

module.exports = ctrl;
