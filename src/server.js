const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const methodoverride = require('method-override');
const erroHandler = require('errorhandler');

//inicializar
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, './views'));
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		partialsDir: path.join(app.get('views'), 'partials'),
		layoutsDir: path.join(app.get('views'), 'layouts'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(multer({ dest: path.join(__dirname, './public/upload/temp') }).single('imagen'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodoverride('_method'));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/clientes'));
app.use(require('./routes/persona'));
app.use(require('./routes/rol'));
app.use(require('./routes/devoluciones'));
app.use(require('./routes/empleados'));
app.use(require('./routes/entrada.facturas'));
app.use(require('./routes/marca'));
app.use(require('./routes/paises'));
app.use(require('./routes/productos'));
app.use(require('./routes/proveedores'));
app.use(require('./routes/salida.facturas'));

// static files
app.use('/static', express.static(path.join(__dirname, './public')));

// errohandlers
if ('development' === app.get('env')) {
	app.use(erroHandler);
}

module.exports = app;
