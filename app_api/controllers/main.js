var Vacation = require('../models/vacation');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.index = function(req, res) {
  
  sendJSONresponse(res, 200, { status: 'success' });
};
