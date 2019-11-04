//With Expressjs
const path = require('path');

const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
});

app.listen(3000);