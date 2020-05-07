const db = require('../models');

module.exports = function(app) {
  app.get('/api/smallbusiness/:name', function(req, res) {
    db.smallBis.findOne({
      where: {
        name: req.params.name,
      },
    }).then(function(smallbusiness) {
      console.log(smallbusiness)
      res.json(smallbusiness);
    });
  });
  app.post('/api/smallbusiness', function(req, res) {
    console.log(req.body);
    db.smallBis.create(req.body).then(function(smallBusiness) {
      res.json(smallBusiness);
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

