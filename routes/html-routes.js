const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/partials/index.html'));
  });
  app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/partials/registration.html'));
  });
};
