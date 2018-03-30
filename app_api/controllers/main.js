var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.index = function(req, res) {
  res.render('index', { title: 'Tmp Express!!!' });
};
