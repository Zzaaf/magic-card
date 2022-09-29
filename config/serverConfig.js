const express = require('express');
const cors = require('cors');
const ssr = require('../middleware/ssr');

const serverConfig = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static('public'));
  app.use(ssr);
};

module.exports = serverConfig;
