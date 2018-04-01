var request = require('request');

var apiOptions = {
    server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://my.site.com';
}

module.exports.index = function (req, res) {
    res.render('index', {title: 'Tmp Express!!!'});
};
