require('dotenv').config();
require('@babel/register');

const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRouter = require('./routes/main.route');
const { sequelize } = require('./db/models');

const app = express();
const port = process.env.PORT ?? 3000;

serverConfig(app);

app.use('/', mainRouter);

sequelize.authenticate();

app.listen(port, () => console.log(`*** Server started at ${port} port ***`));
