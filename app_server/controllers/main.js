var request = require('request');

var apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://my.site.com';
}

module.exports.index = function(req, res) {
  request('http://localhost:3000/api/vacations', function(
    error,
    response,
    body
  ) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    var body1 = JSON.parse(body);
    console.log(typeof body1);
    res.render('index', { body1 });
  });
};
