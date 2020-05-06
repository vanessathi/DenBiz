const db = require('../models');

module.exports = function(app) {
  // app.get('/api/smallbusiness', function(req, res) {
  //   db.smallbusiness.findAll({
  //     include: [db.Post],
  //   }).then(function(dbsmallbusiness) {
  //     res.json(dbsmallbusiness);
  //   });
  // });

  // app.get('/api/smallbusiness/:id', function(req, res) {
  //   db.smallbusiness.findOne({
  //     where: {
  //       id: req.params.id,
  //     },
  //     include: [db.Post],
  //   }).then(function(dbsmallbusiness) {
  //     res.json(dbsmallbusiness);
  //   });
  // });
  app.post('/api/smallbusiness', function(req, res) {
    console.log(req.body);
    db.smallBis.create(req.body).then(function(dbsmallbusiness) {
      res.json(dbsmallbusiness);
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

