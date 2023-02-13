require('dotenv').config();
require('@babel/register');

const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRouter = require('./routes/main.routes');
const { sequelize } = require('./db/models');

const app = express();
const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use('/', mainRouter);

async function run() {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`*** Server started at ${PORT} port ***`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

run();
