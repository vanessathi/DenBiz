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
  app.get('/api/business', (req, res) => {
    const pgNumber = req.params;
    console.log(req.params);
    db.smallBis.findAll()
        .then(function(data) {
          const results = [];
          for (let i = 1 * pgNumber; i < (12 * pgNumber) + 11; i++) {
            results.push(data[i].dataValues);
            if (i === data.length) break;
          }
          console.log(results);
          res.render('business', {key: results});
        });
  });

  // app.delete('api/smallbusiness/:id', function(req, res) {
  //   db.smallbusiness.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then(function(dbsmallbusiness) {
  //     res.json(dbsmallbusiness);
  //   });
  // });
};

