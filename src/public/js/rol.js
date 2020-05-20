$(document).ready(function () {
	let edit = false;
	$('#form-rol').submit(function () {
		const rol = $('#rol').val();
		const descripcion = $('#descripcion').val();
		const id = $('#id').val();
		const url = edit === false ? `/rol/agregar` : `/rol/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				rol: rol,
				descripcion: descripcion,
			},
		});
		$('#form-rol').trigger('reset');
	});

	$(document).on('click', '#edit-rol', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/rol/actualizar/${id}`, (res) => {
			var rol = res;
			$('#id').val(rol.ID);
			$('#rol').val(rol.rol);
			$('#descripcion').val(rol.descripcion);
			edit = true;
		});
	});
});
