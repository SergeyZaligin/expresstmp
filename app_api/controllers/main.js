var Vacation = require('../models/vacation');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.index = function (req, res) {
    sendJSONresponse(res, 200, {
        status: 'success'
    });
};

module.exports.vacations = function (req, res) {
    Vacation.find({
        available: true
    }, function (err, vacations) {
        var context = {
            vacations: vacations.map(function (vacation) {
                return {
                    sku: vacation.sku,
                    name: vacation.name,
                    description: vacation.description,
                    price: vacation.getDisplayPrice(),
                    inSeason: vacation.inSeason,
                }
            })
        };
        console.log(context);
        res.render('vacations', context);
    });
};
