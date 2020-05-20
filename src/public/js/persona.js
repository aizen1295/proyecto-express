$(document).ready(function () {
	let edit = false;
	$('#form-persona').submit(function () {
		const nombres = $('#nombres').val();
		const apellidos = $('#apellidos').val();
		const barrio = $('#barrio').val();
		const direccion = $('#direccion').val();
		const edad = $('#edad').val();
		const fecha_nacimiento = $('#fecha_nacimiento').val();
		const id_documento = $('#id_documento').val();
		const N_documento = $('#N_documento').val();
		const id_genero = $('#id_genero').val();
		const telefono = $('#telefono').val();
		const correo = $('#correo').val();
		const id = $('#id').val();
		const url = edit === false ? `/persona/agregar` : `/persona/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				nombres: nombres,
				apellidos: apellidos,
				barrio: barrio,
				direccion: direccion,
				edad: edad,
				fecha_nacimiento: fecha_nacimiento,
				id_documento: id_documento,
				N_documento: N_documento,
				id_genero: id_genero,
				telefono: telefono,
				correo: correo,
			},
		});
		$('#form-persona').trigger('reset');
	});

	$(document).on('click', '#edit-persona', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/persona/actualizar/${id}`, (res) => {
			var persona = res;
			$('#id').val(persona.ID);
			$('#nombres').val(persona.nombres);
			$('#apellidos').val(persona.apellidos);
			$('#barrio').val(persona.direccion);
			$('#direccion').val(persona.barrio);
			$('#edad').val(persona.edad);
			$('#fecha_nacimiento').val(persona.fecha_nacimiento);
			$('#id_documento').val(persona.id_documento);
			$('#N_documento').val(persona.N_documento);
			$('#id_genero').val(persona.id_genero);
			$('#telefono').val(persona.telefono);
			$('#correo').val(persona.correo);
			edit = true;
		});
	});
});
