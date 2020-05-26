$(document).ready(function () {
	let edit = false;
	$('#form-pedido').submit(function () {
		const fecha = $('#fecha').val();
		const id_proveedor = $('#id_proveedor').val();
		const id_empleados = $('#id_empleados').val();
		const id_producto = $('#id_producto').val();
		const id_tipo = $('#id_tipo').val();
		const cantidad = $('#cantidad').val();
		const iva = $('#iva').val();
		const total = $('#total').val();
		const id = $('#id').val();
		const url = edit === false ? `/pedido/agregar` : `/pedido/editar/${id}`;
		$.ajax({
			url: url,
			method: 'POST',
			data: {
				fecha: fecha,
				id_proveedor: id_proveedor,
				id_empleados: id_empleados,
				id_producto: id_producto,
				id_tipo: id_tipo,
				cantidad: cantidad,
				iva: iva,
				total: total,
			},
		});
		$('#form-pedido').trigger('reset');
	});

	$(document).on('click', '#edit-pedido', function () {
		var elemento = $(this)[0].parentElement.parentElement;
		const id = $(elemento).attr('task');
		console.log(id);
		$.get(`/pedido/actualizar/${id}`, (res) => {
			var pedido = res;
			$('#id').val(pedido.ID);
			$('#fecha').val(pedido.fecha);
			$('#id_proveedor').val(pedido.id_proveedor);
			$('#id_empleados').val(pedido.id_empleados);
			$('#id_producto').val(pedido.id_producto);
			$('#id_tipo').val(pedido.id_tipo);
			$('#cantidad').val(pedido.cantidad);
			$('#valor_compra').val(pedido.precio_de_compra);
			$('#iva').val(pedido.iva);
			$('#total').val(pedido.total);
			edit = true;
		});
	});
	$(function () {
		$('#cantidad').change(function () {
			let valor = $('#valor_compra').val();
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
		$.get(`/pedido/calcular/${id_producto}`, (res) => {
			let producto = res;
			$('#valor_compra').val(producto.precio_de_compra);
		});
	}
});
