const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize') (session.Store);
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: "top secret",
//     cookie: {
//         maxAge: 300000,
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })  
// };

// app.use(session(sess));

// Handlebars stuff
const hbs = handlebars.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Setup static Public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./controllers/index'));

app.get('/', (req, res) => {
    res.render('home', {layout : 'main'});
});

// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}, at http://localhost:3001.`)
});
// });