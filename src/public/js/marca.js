$(document).ready(function () {
	let edit = false;
	$('#form-marca').submit(function () {
		const tipo_producto = $('#tipo_producto').val();
		const id = $('#id').val();
		const url = edit === false ? `/marca/agregar` : `/marca/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				tipo_producto: tipo_producto,
			},
		});
		$('#form-marca').trigger('reset');
	});

	$(document).on('click', '#edit-marca', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/marca/actualizar/${id}`, (res) => {
			var marca = res;
			$('#id').val(marca.ID);
			$('#tipo_producto').val(marca.tipo_producto);
			edit = true;
		});
	});
});
