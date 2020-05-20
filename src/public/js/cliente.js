$(document).ready(function () {
	let edit = false;
	$('#form-cliente').submit(function () {
		const id_tipo_cliente = $('#id_tipo_cliente').val();
		const id_persona = $('#id_persona').val();
		const id = $('#id').val();
		const url = edit === false ? `/clientes/agregar` : `/clientes/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				id_tipo_cliente: id_tipo_cliente,
				id_persona: id_persona,
			},
		});
		$('#form-cliente').trigger('reset');
	});

	$(document).on('click', '#edit-cliente', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/clientes/actualizar/${id}`, (res) => {
			var cliente = res;
			$('#id').val(cliente.ID);
			$('#id_tipo_cliente').val(cliente.id_tipo_cliente);
			$('#id_persona').val(cliente.id_persona);
			edit = true;
		});
	});
});
