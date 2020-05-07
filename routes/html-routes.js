const path = require('path');
const db = require('../models');
sequelize = require('sequelize');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.smallBis.findAll()
        .then(function(data) {
          const details =
          (data[Math.floor(Math.random() * data.length)].dataValues);

          res.render('index', details);
        });
  });
  app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/partials/registration.html'));
  });
  app.get('/business', (req, res) => {
    db.smallBis.findAll()
        .then(function(data) {
          res.render('business', data);
        });
  });
};
