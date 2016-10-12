var request = require('request');

request('http://api.open-notify.org/iss-now.json', function (err, result) {
    if (err) {
        console.log(err);
    } else {
        var parsedData = JSON.parse(result.body);
        console.log(result.body);

        // var latitude = parsedData.iss_position.latitude;
        // var longitude = parsedData.iss_position.longitude;
        
        // console.log('Latitude: ' + latitude.toFixed(2) + '\n' + 'Longitude: ' + longitude.toFixed(2));
    }
});

