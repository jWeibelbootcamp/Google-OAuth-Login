const express = require('express');
const sequelize = require('./config/connection');
const morgan = require('./') // may toss this out idk.
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars stuff - also changes extension to .hbs instead of .handlebars.
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}, at http://localhost:3001.`)
});