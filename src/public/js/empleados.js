$(document).ready(function () {
	let edit = false;
	$('#form-empleado').submit(function () {
		const usuario = $('#usuario').val();
		const contra = $('#contra').val();
		const id_rol = $('#id_rol').val();
		const id_persona = $('#id_persona').val();
		const id = $('#id').val();
		const url = edit === false ? `/empleados/agregar` : `/empleados/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				id_rol: id_rol,
				id_persona: id_persona,
				usuario: usuario,
				contra: contra,
			},
		});
		$('#form-empleado').trigger('reset');
	});

	$(document).on('click', '#edit-empleado', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		$.get(`/empleados/actualizar/${id}`, (res) => {
			var empleado = res;
			$('#id').val(empleado.ID);
			$('#usuario').val(empleado.usuario);
			$('#contra').val(empleado.contra);
			$('#id_rol').val(empleado.id_rol);
			$('#id_persona').val(empleado.id_persona);
			edit = true;
		});
	});
});
