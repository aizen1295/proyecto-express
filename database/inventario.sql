-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2020 a las 01:47:10
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodega`
--

CREATE TABLE `bodega` (
  `ID` int(11) NOT NULL,
  `zona` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bodega`
--

INSERT INTO `bodega` (`ID`, `zona`) VALUES
(1, 'estante 1'),
(2, 'estante 2'),
(3, 'estante 3'),
(4, 'estante 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `ID` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `id_tipo_cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`ID`, `id_persona`, `id_tipo_cliente`) VALUES
(1, 1, 1),
(11, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_devoluciones`
--

CREATE TABLE `detalle_devoluciones` (
  `ID` int(11) NOT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_devoluciones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devoluciones`
--

CREATE TABLE `devoluciones` (
  `ID` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `Causas_de_la_Devolución` varchar(255) DEFAULT NULL,
  `Total` decimal(20,2) DEFAULT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_salidas_factura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `ID` int(11) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `contra` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`ID`, `id_rol`, `id_persona`, `usuario`, `contra`) VALUES
(1, 1, 1, 'aizen', '65335');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas_factura`
--

CREATE TABLE `entradas_factura` (
  `ID` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `iva` decimal(20,2) DEFAULT NULL,
  `total` decimal(20,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `entradas_factura`
--

INSERT INTO `entradas_factura` (`ID`, `fecha`, `id_proveedor`, `id_empleados`, `id_producto`, `id_tipo`, `cantidad`, `iva`, `total`) VALUES
(8, '2020-05-19', 1, 1, 18, 2, 20, '26000.00', '250000.00'),
(9, '2020-05-26', 2, 1, 49, 2, 100, '319200.00', '1999200.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `ID` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`ID`, `descripcion`) VALUES
(1, 'masculino'),
(2, 'femenido'),
(3, 'personalizado');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `inventario_compra`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `inventario_compra` (
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `inventario_total`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `inventario_total` (
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `inventario_ventas`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `inventario_ventas` (
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `ID` int(11) NOT NULL,
  `tipo_producto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`ID`, `tipo_producto`) VALUES
(1, 'salud'),
(2, 'BELLEZA'),
(3, 'NUTRICION'),
(4, 'VITAMINAS Y PROTEINAS'),
(5, 'ADELGASAR'),
(6, 'VITAMINAS C'),
(8, 'vitaminas s'),
(9, 'vitamina a'),
(10, 'CORONA APP');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `ID` int(1) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`ID`, `Nombre`) VALUES
(1, 'EL SALVADOR'),
(2, 'GUATEMALA'),
(3, 'PANAMÁ'),
(4, 'COLOMBIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `ID` int(11) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `barrio` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `edad` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `id_documento` int(11) DEFAULT NULL,
  `N_documento` int(100) DEFAULT NULL,
  `id_genero` int(11) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID`, `nombres`, `apellidos`, `barrio`, `direccion`, `edad`, `fecha_nacimiento`, `id_documento`, `N_documento`, `id_genero`, `telefono`, `correo`) VALUES
(1, 'DAVID EDUARDO', 'CAMACHO CASTRO', 'los pinos', 'calle 20 # 50-32', '25', '0000-00-00', 1, 1075285557, 1, '3206598422', 'CAMACHO@hotmail.com'),
(3, 'jose leonardo', 'forero perdomo', 'el pinal', 'calle 35 # 98-35', '28', '2020-05-26', 2, 1075285557, 1, '3206598422', 'naturalcot@gmail.com'),
(5, 'manuel', 'mauricio', 'canaima', 'calle 42 # 20-32', '30', '2020-05-26', 2, 1235610564, 1, '3206598456', 'mauricio@gmail');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `precio_de_compra` decimal(20,2) DEFAULT NULL,
  `precio_de_venta` decimal(20,2) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `id_bodega` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID`, `Nombre`, `descripcion`, `precio_de_compra`, `precio_de_venta`, `id_marca`, `id_bodega`) VALUES
(18, 'ACEITE DE COCO ORGANICO', 'lapiz', '20000.00', '50000.00', 1, 2),
(21, 'ACEITE ESENCIAL DE ÁRBOL DE TÉ', 'ACEITE ESENCIAL DE ÁRBOL DE TÉ', '32000.00', '45000.00', 2, 4),
(27, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '20000.00', '35000.00', 1, 2),
(29, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '20000.00', '35000.00', 3, 3),
(30, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '35000.00', '20000.00', 2, 4),
(31, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '35000.00', '20000.00', 1, 1),
(32, 'ACEITE DE NARANJA Y CALÉNDULA', '240 ML - NATURAL FRESHLY', '60000.00', '50000.00', 2, 3),
(33, 'ACEITE DE NARANJA Y CALÉNDULA', '240 ML - NATURAL FRESHLY', '50000.00', '60000.00', 3, 3),
(34, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '2000.00', '4500.00', 5, 3),
(35, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '35000.00', '20000.00', 5, 3),
(39, 'ACEITE DE COCO ORGANICO', '1000 MG X 90 SOFTGELS', '35000.00', '20000.00', 4, 3),
(45, 'ACEITE DE COCO ORGANICO', 'lapiz', '30000.00', '20000.00', 6, 4),
(46, 'ACEITE DE COCO ORGANICO', 'fgfdhgfh', '5000.00', '30000.00', 7, 4),
(49, 'uguento', 'sirve para varias cosas', '16800.00', '28000.00', 8, 4),
(96, 'aceite de oliva', 'para concinar', '5000.00', '6000.00', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `ID` int(11) NOT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `representante` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`ID`, `empresa`, `direccion`, `id_pais`, `telefono`, `correo`, `representante`) VALUES
(1, 'supermercado naturista', 'calle 30 # 34-76', 1, '8761048', 'supermercadonaturista@gmail.com', 'JUAN CAMILO'),
(2, 'naturalcot', 'calle 35 # 98-35', 1, '345416323', 'naturalcot@gmail.com', 'JOSE LEONARDO'),
(3, 'vitaminas sas', 'calle 78 # 34-76', 2, '68454364', 'vitaminas12sas@gmail.com', 'JHON JAIRO'),
(4, 'bellesas sas', 'calle 35 # 98-35', 1, '34556232', 'bellesas45@gmail.com', 'BRAYAN GONZALES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `ID` int(11) NOT NULL,
  `rol` varchar(50) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`ID`, `rol`, `descripcion`) VALUES
(1, 'GERENTE', 'encargardo de la tienda'),
(2, 'EMPLEADO(A)', 'Encargado de cajas'),
(3, 'ALMACENISTA', 'encargado del almacen'),
(4, 'ATENCION AL CLIENTE', 'es el encargardo de los clientes'),
(5, 'GERENTE 2', 'tales'),
(6, 'gerente2', 'cuadernos'),
(7, 'gerente3', 'fsdfdsfds');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas_facturas`
--

CREATE TABLE `salidas_facturas` (
  `ID` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `iva` decimal(20,2) DEFAULT NULL,
  `total` decimal(20,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `salidas_facturas`
--

INSERT INTO `salidas_facturas` (`ID`, `fecha`, `id_cliente`, `id_empleados`, `id_producto`, `id_tipo`, `cantidad`, `iva`, `total`) VALUES
(6, '0000-00-00', 11, 1, 49, 2, 2, '10640.00', '66640.00'),
(12, '2020-05-23', 11, 1, 27, 2, 5, '6650.00', '181650.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cliente`
--

CREATE TABLE `tipo_cliente` (
  `ID` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_cliente`
--

INSERT INTO `tipo_cliente` (`ID`, `descripcion`) VALUES
(1, 'nuevo'),
(2, 'antiguo'),
(3, 'premium');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_compra`
--

CREATE TABLE `tipo_de_compra` (
  `ID` int(1) NOT NULL,
  `tipo_de_compra` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_de_compra`
--

INSERT INTO `tipo_de_compra` (`ID`, `tipo_de_compra`) VALUES
(1, 'efectivo'),
(2, 'tarjeta de credito'),
(3, 'tarjeta debito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `ID` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`ID`, `descripcion`) VALUES
(1, 'tarjeta de identidad'),
(2, 'cedula ciudadania'),
(3, 'cedula extrajera'),
(4, 'pasaporte');

-- --------------------------------------------------------

--
-- Estructura para la vista `inventario_compra`
--
DROP TABLE IF EXISTS `inventario_compra`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `inventario_compra`  AS  select `pro`.`id_producto` AS `id_producto`,`pro`.`Nombre` AS `producto`,sum(`def`.`cantidad`) AS `cantidad_compradas`,sum(`def`.`cantidad`) * `pro`.`precio_de_compra` AS `costo_de_compra` from (`detalle_entradas_factura` `def` join `productos` `pro` on(`def`.`id_producto` = `pro`.`id_producto`)) group by `pro`.`Nombre` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `inventario_total`
--
DROP TABLE IF EXISTS `inventario_total`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `inventario_total`  AS  select `pro`.`id_producto` AS `id_producto`,`pro`.`Nombre` AS `producto`,`inc`.`cantidad_compradas` AS `cantidad_compradas`,`inc`.`costo_de_compra` AS `costo_de_compra`,`inv`.`cantidad_vendida` AS `cantidad_vendida`,`inv`.`precio_de_ventas` AS `precio_de_ventas`,`inc`.`cantidad_compradas` - `inv`.`cantidad_vendida` AS `existencias`,`inv`.`precio_de_ventas` - `inc`.`costo_de_compra` AS `ganancias` from ((`productos` `pro` join `inventario_compra` `inc` on(`pro`.`id_producto` = `inc`.`id_producto`)) join `inventario_ventas` `inv` on(`pro`.`id_producto` = `inv`.`id_producto`)) group by `pro`.`Nombre` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `inventario_ventas`
--
DROP TABLE IF EXISTS `inventario_ventas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `inventario_ventas`  AS  select `pro`.`id_producto` AS `id_producto`,`pro`.`Nombre` AS `producto`,sum(`def`.`cantidad`) AS `cantidad_vendida`,sum(`def`.`cantidad`) * `pro`.`Precio_de_Venta` AS `precio_de_ventas` from (`detalle_salida_factura` `def` join `productos` `pro` on(`def`.`id_producto` = `pro`.`id_producto`)) group by `pro`.`Nombre` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodega`
--
ALTER TABLE `bodega`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_cielnte_persona` (`id_persona`),
  ADD KEY `fk_tipo_cliente` (`id_tipo_cliente`);

--
-- Indices de la tabla `detalle_devoluciones`
--
ALTER TABLE `detalle_devoluciones`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_detalle_devolucion` (`id_devoluciones`),
  ADD KEY `fk_producto_detalle_devolucion` (`id_producto`);

--
-- Indices de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_cliente_devolucion` (`id_cliente`),
  ADD KEY `fk_salida_devolucion` (`id_salidas_factura`),
  ADD KEY `fk_empleados_devolucion` (`id_empleado`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_empleados_cargo` (`id_rol`),
  ADD KEY `fk_empleado_persona` (`id_persona`);

--
-- Indices de la tabla `entradas_factura`
--
ALTER TABLE `entradas_factura`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_entrada_empleados` (`id_empleados`),
  ADD KEY `fk_entrada_productos` (`id_producto`),
  ADD KEY `fk_proveedores` (`id_proveedor`),
  ADD KEY `fk_tipo` (`id_tipo`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_tipo_documento` (`id_documento`),
  ADD KEY `fk_genero` (`id_genero`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_producto_bodega` (`id_bodega`),
  ADD KEY `fk_producto_tipo` (`id_marca`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_proveedor_paises` (`id_pais`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `salidas_facturas`
--
ALTER TABLE `salidas_facturas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_salida_cliente` (`id_cliente`),
  ADD KEY `fk_salida_empleados` (`id_empleados`),
  ADD KEY `fk_salida_producto` (`id_producto`),
  ADD KEY `fk_salida_tipo` (`id_tipo`);

--
-- Indices de la tabla `tipo_cliente`
--
ALTER TABLE `tipo_cliente`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tipo_de_compra`
--
ALTER TABLE `tipo_de_compra`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bodega`
--
ALTER TABLE `bodega`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `detalle_devoluciones`
--
ALTER TABLE `detalle_devoluciones`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `entradas_factura`
--
ALTER TABLE `entradas_factura`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `salidas_facturas`
--
ALTER TABLE `salidas_facturas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tipo_cliente`
--
ALTER TABLE `tipo_cliente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_de_compra`
--
ALTER TABLE `tipo_de_compra`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_cielnte_persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipo_cliente` FOREIGN KEY (`id_tipo_cliente`) REFERENCES `tipo_cliente` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalle_devoluciones`
--
ALTER TABLE `detalle_devoluciones`
  ADD CONSTRAINT `fk_detalle_devolucion` FOREIGN KEY (`id_devoluciones`) REFERENCES `devoluciones` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_producto_detalle_devolucion` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `devoluciones`
--
ALTER TABLE `devoluciones`
  ADD CONSTRAINT `fk_cliente_devolucion` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_empleados_devolucion` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_salida_devolucion` FOREIGN KEY (`id_salidas_factura`) REFERENCES `salidas_facturas` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `fk_empleado_persona` FOREIGN KEY (`id_persona`) REFERENCES `persona` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_empleados_cargo` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entradas_factura`
--
ALTER TABLE `entradas_factura`
  ADD CONSTRAINT `fk_entrada_empleados` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_entrada_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proveedores` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_de_compra` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `fk_genero` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipo_documento` FOREIGN KEY (`id_documento`) REFERENCES `tipo_documento` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `fk_proveedor_paises` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `salidas_facturas`
--
ALTER TABLE `salidas_facturas`
  ADD CONSTRAINT `fk_salida_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_salida_empleados` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_salida_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_salida_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_de_compra` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
