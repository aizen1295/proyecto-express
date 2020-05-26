const pool = require('../database');
const ctrl = {};

ctrl.index = async (red, res) => {
	const factura = await pool.query(
		'SELECT st.ID, st.fecha, c.ID cliente, em.ID empleado, pro.Nombre producto, pro.precio_de_venta, st.cantidad, st.iva, st.total, tc.tipo_de_compra FROM salidas_facturas st INNER JOIN empleados em ON em.ID = st.id_empleados INNER JOIN productos pro ON pro.ID = st.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN clientes c ON c.ID = st.id_cliente INNER JOIN tipo_de_compra tc ON tc.ID = st.id_tipo'
	);
	const empleado = await pool.query(
		'SELECT e.ID, p.nombres FROM empleados e INNER JOIN persona p ON p.ID = e.id_persona'
	);
	const cliente = await pool.query(
		'SELECT c.ID, p.nombres FROM clientes c INNER JOIN persona p ON p.ID = c.id_persona'
	);
	const producto = await pool.query('SELECT * FROM productos ');
	const pago = await pool.query('SELECT * FROM tipo_de_compra ');
	res.render('factura/frmfactura', { factura, empleado, cliente, producto, pago });
};

ctrl.create = async (req, res) => {
	const factura = req.body;
	console.log(factura);
	await pool.query('INSERT INTO salidas_facturas set ?', [factura]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const factura = await pool.query(
		'SELECT st.ID, fecha, id_cliente, id_empleados, id_producto, id_tipo, cantidad, iva, total, pro.precio_de_venta FROM salidas_facturas st INNER JOIN productos pro ON pro.ID = st.id_producto WHERE st.ID = ?',
		[id]
	);
	res.json(factura[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const factura = req.body;
	console.log(factura);
	await pool.query('update salidas_facturas set ? where ID = ?', [factura, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM salidas_facturas WHERE ID = ?', [id]);
	console.log(id);
	res.redirect('/factura');
};

ctrl.cal = async (req, res) => {
	const { id } = req.params;
	const valor = await pool.query('SELECT * FROM productos WHERE ID = ?', [id]);
	res.json(valor[0]);
};
//exportar
module.exports = ctrl;
