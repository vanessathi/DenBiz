const db = require('../models');

module.exports = function(app) {
  app.get('/api/smallbusiness/:name', function(req, res) {
    db.smallBis.findOne({
      where: {
        name: req.params.name,
      },
    }).then(function(smallbusiness) {
      res.json(smallbusiness);
    });
  });
  app.post('/api/smallbusiness', function(req, res) {
    console.log(req.body);
    db.smallBis.create(req.body).then(function(smallBusiness) {
      res.json(smallBusiness);
    });
  });
  app.get('/api/business/:pg', (req, res) => {
    db.smallBis.findAll()
        .then(function(data) {
          const results = [];
          let pgNumber = (parseInt(req.params.pg) * 12) -1;
          for (let i = 0; i < 12; i++) {
            if (pgNumber === data.length) break;
            results.push(data[pgNumber].dataValues);
            pgNumber ++;
          }
          res.render('business', {key: results});
        });
  });

  app.delete('/api/smallbusiness/:id', function(req, res) {
    db.smallBis.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbsmallbusiness) {
      res.json(dbsmallbusiness);
    });
  });
};

