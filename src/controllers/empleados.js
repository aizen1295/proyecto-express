const pool = require('../database');
const ctrl = {};

ctrl.index = async (red, res) => {
	const empleado = await pool.query(
		'SELECT em.ID, nombres, apellidos,rol,usuario,contra FROM empleados em INNER JOIN persona pe ON em.id_persona = pe.ID INNER JOIN roles ro ON em.id_rol = ro.ID'
	);
	const rol = await pool.query('SELECT * FROM roles');
	const persona = await pool.query('SELECT * FROM persona');
	res.render('usuario/frmUsuario', { empleado, rol, persona });
};

ctrl.create = async (req, res) => {
	const empleado = req.body;
	await pool.query('INSERT INTO empleados set ?', [empleado]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const empleado = await pool.query('SELECT * FROM empleados WHERE ID = ?', [id]);
	console.log(empleado);
	res.json(empleado[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const empleado = req.body;
	await pool.query('update empleados set ? where ID = ?', [empleado, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM empleados WHERE ID = ?', [id]);
	res.redirect('/empleados');
};

//exportar
module.exports = ctrl;
