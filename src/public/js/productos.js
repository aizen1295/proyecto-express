$(document).ready(function () {
	let edit = false;
	$('#form-productos').submit(function () {
		const nombre = $('#nombre').val();
		const descripcion = $('#descripcion').val();
		const compra = $('#compra').val();
		const venta = $('#venta').val();
		const marca = $('#marca').val();
		const ubicacion = $('#ubicacion').val();
		const id = $('#id').val();
		const url = edit === false ? `/productos/agregar` : `/productos/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				nombre: nombre,
				descripcion: descripcion,
				precio_de_compra: compra,
				precio_de_venta: venta,
				id_marca: marca,
				id_bodega: ubicacion,
			},
		});
		$('#form-productos').trigger('reset');
	});

	$(document).on('click', '#edit-producto', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/productos/actualizar/${id}`, (res) => {
			var producto = res;
			$('#id').val(producto.ID);
			$('#nombre').val(producto.Nombre);
			$('#descripcion').val(producto.descripcion);
			$('#compra').val(producto.precio_de_venta);
			$('#venta').val(producto.precio_de_compra);
			$('#marca').val(producto.id_marca);
			$('#ubicacion').val(producto.id_bodega);
			edit = true;
		});
	});
});
