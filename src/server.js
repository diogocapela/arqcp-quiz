const path = require('path');

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const expressHandlebars = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressMinifyHTML = require('express-minify-html');

const app = express();
const port = process.env.PORT || 3000;

/* express */
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
/* compression */
app.use(compression());
/* helmet */
app.use(helmet());
app.use(helmet.noCache());
/* express-handlebars */
const helpers = require('@zdigital/helpers');

const hbs = expressHandlebars.create({
    extname: 'hbs',
    helpers,
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/components'),
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.disable('view cache'); // app.enable('view cache');
/* morgan */
app.use(morgan('dev'));
/* body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* cookie-parser */
app.use(cookieParser());
/* express-minify-html */
app.use(expressMinifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: false,
        minifyJS: true,
    },
}));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(app.get('port'), () => {
    console.log('The server is running at http://localhost:%d in %s mode.', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop.\n');
});

module.exports = app;
