const pool = require('../database');
const ctrl = {};

ctrl.index = async (red, res) => {
	const producto = await pool.query(
		'SELECT pro.ID, pro.Nombre, pro.descripcion, pro.precio_de_compra, pro.precio_de_venta, m.tipo_producto, b.zona  FROM productos pro INNER JOIN marca m ON pro.id_marca = m.ID INNER JOIN bodega b ON pro.id_bodega = b.ID ORDER BY pro.ID'
	);
	const marca = await pool.query('SELECT * FROM marca ');
	const bodega = await pool.query('SELECT * FROM bodega ');
	res.render('producto/frmProducto', { producto, marca, bodega });
};

ctrl.create = async (req, res) => {
	const producto = req.body;
	await pool.query('INSERT INTO productos set ?', [producto]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const producto = await pool.query('SELECT * FROM productos WHERE ID = ?', [id]);
	console.log(id);
	res.json(producto[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const producto = req.body;
	await pool.query('update productos set ? where ID = ?', [producto, id]);
	console.log(producto);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM productos WHERE ID = ?', [id]);
	console.log(id);
	res.redirect('/productos');
};
//exportar
module.exports = ctrl;
