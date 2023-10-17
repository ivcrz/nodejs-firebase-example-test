const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;