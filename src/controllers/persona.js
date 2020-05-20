const ctrl = {};
const pool = require('../database');

ctrl.index = async (req, res) => {
	const persona = await pool.query(
		'SELECT p.ID, nombres,N_documento,direccion,barrio,fecha_nacimiento,telefono,correo,td.descripcion documento,g.descripcion genero FROM persona p INNER JOIN genero g ON g.ID = p.id_genero INNER JOIN tipo_documento td ON td.ID = p.id_documento'
	);
	const genero = await pool.query('SELECT * FROM genero ');
	const documento = await pool.query('SELECT * FROM tipo_documento ');
	res.render('persona/frmPersona', { persona, genero, documento });
};

ctrl.create = async (req, res) => {
	const persona = req.body;
	await pool.query('INSERT INTO persona set ?', [persona]);
};

ctrl.show = async (req, res) => {
	const { id } = req.params;
	const persona = await pool.query('SELECT * FROM persona WHERE ID = ?', [id]);
	res.json(persona[0]);
};

ctrl.edit = async (req, res) => {
	const { id } = req.params;
	const persona = req.body;
	await pool.query('update persona set ? where ID = ?', [persona, id]);
};

ctrl.delete = async (req, res) => {
	const id = req.params.id;
	await pool.query('DELETE FROM persona WHERE ID = ?', [id]);
	res.redirect('/persona');
};

//exportar
module.exports = ctrl;
