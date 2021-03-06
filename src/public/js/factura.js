$(document).ready(function () {
	let edit = false;
	$('#form-factura').submit(function () {
		const fecha = $('#fecha').val();
		const id_cliente = $('#id_cliente').val();
		const id_empleados = $('#id_empleados').val();
		const id_producto = $('#id_producto').val();
		const id_tipo = $('#id_tipo').val();
		const cantidad = $('#cantidad').val();
		const iva = $('#iva').val();
		const total = $('#total').val();
		const id = $('#id').val();
		const url = edit === false ? `/factura/agregar` : `/factura/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				fecha: fecha,
				id_cliente: id_cliente,
				id_empleados: id_empleados,
				id_producto: id_producto,
				id_tipo: id_tipo,
				cantidad: cantidad,
				iva: iva,
				total: total,
			},
		});
		$('#form-factura').trigger('reset');
	});

	$(document).on('click', '#edit-factura', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/factura/actualizar/${id}`, (res) => {
			var factura = res;
			$('#id').val(factura.ID);
			$('#fecha').val(factura.fecha);
			$('#id_cliente').val(factura.id_cliente);
			$('#id_empleados').val(factura.id_empleados);
			$('#id_producto').val(factura.id_producto);
			$('#id_tipo').val(factura.id_tipo);
			$('#cantidad').val(factura.cantidad);
			$('#valor_venta').val(factura.precio_de_venta);
			$('#iva').val(factura.iva);
			$('#total').val(factura.total);
			edit = true;
		});
	});
	$(function () {
		$('#cantidad').change(function () {
			let valor = $('#valor_venta').val();
			let cantidad = $('#cantidad').val();
			let iva = valor * cantidad * 0.19;
			$('#iva').val(iva);
			let ivas = parseFloat(iva);
			let valor_total = valor * cantidad + ivas;
			$('#total').val(valor_total);
		});
	});

	$(function () {
		$('#id_producto').on('change', valor);
	});

	function valor() {
		var id_producto = $(this).val();
		$.get(`/factura/calcular/${id_producto}`, (res) => {
			let producto = res;
			$('#valor_venta').val(producto.precio_de_venta);
		});
	}
});
