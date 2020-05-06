const path = require('path');
const db = require('../models');
sequelize = require('sequelize');

module.exports = function(app) {
  // app.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../views/partials/index.html'));
  // });
  app.get('/', function(req, res) {
    db.smallBis.findAll({order: sequelize.random, limit: 1})
        .then(function(data) {
          const details = (data[0].dataValues);
          res.render('index', details);
        });
  });
  app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/partials/registration.html'));
  });
};
