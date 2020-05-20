$(document).ready(function () {
	let edit = false;
	$('#form-proveedor').submit(function () {
		const empresa = $('#empresa').val();
		const id_pais = $('#id_pais').val();
		const representante = $('#representante').val();
		const direccion = $('#direccion').val();
		const telefono = $('#telefono').val();
		const correo = $('#correo').val();
		const id = $('#id').val();
		const url = edit === false ? `/proveedor/agregar` : `/proveedor/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				empresa: empresa,
				direccion: direccion,
				id_pais: id_pais,
				telefono: telefono,
				correo: correo,
				representante: representante,
			},
		});
		$('#form-proveedor').trigger('reset');
	});

	$(document).on('click', '#edit-proveedor', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/proveedor/actualizar/${id}`, (res) => {
			var proveedor = res;
			$('#id').val(proveedor.ID);
			$('#empresa').val(proveedor.empresa);
			$('#id_pais').val(proveedor.id_pais);
			$('#representante').val(proveedor.direccion);
			$('#direccion').val(proveedor.representante);
			$('#telefono').val(proveedor.telefono);
			$('#correo').val(proveedor.correo);
			edit = true;
		});
	});
});
