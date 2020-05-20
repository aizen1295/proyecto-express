const pool = require('../database');
const ctrl = {};

ctrl.index = async (red, res) => {
	const proveedor = await pool.query(
		'SELECT po.ID ,empresa, direccion, p.Nombre, telefono,correo, representante FROM proveedores po  INNER JOIN paises p ON po.id_pais = p.ID ORDER BY po.ID'
	);
	const pais = await pool.query('SELECT * FROM paises');
	res.render('producto/frmProveedor', { proveedor, pais });
};

ctrl.create = async (req, res) => {
	const proveedor = req.body;
	await pool.query('INSERT INTO proveedores set ?', [proveedor]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const proveedor = await pool.query('SELECT * FROM proveedores WHERE ID = ?', [id]);
	res.json(proveedor[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const proveedor = req.body;
	await pool.query('update proveedores set ? where ID = ?', [proveedor, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM proveedores WHERE ID = ?', [id]);
	res.redirect('/proveedor');
};

//exportar
module.exports = ctrl;
