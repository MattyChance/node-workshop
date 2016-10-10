
//using prompt to get user's location input
var prompt = require('prompt');
var request = require('request');
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
  
function LatLon(lat, lon) {
    // allow instantiation without 'new'
    if (!(this instanceof LatLon)) return new LatLon(lat, lon);

    this.lat = Number(lat);
    this.lon = Number(lon);
}
  
function getUserAddress () {
    prompt.get('city', function(err, userInput) {
        if (err) {
            console.log(err);
        }
        else {
            var userAddress = userInput;
            getUserLocation(userAddress);
        }
    });
    return "" ;
}

var output = getUserAddress();
console.log(output);

function getUserLocation(userAddress) {
    // console.log(userAddress);

    //using google api to find the longitude and latitude of the given location
    var apiCall = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + userAddress.city;

    request.get(apiCall, function(err, output) {
        if (err) {
            console.log(err);
        }
        else {
            var parsedData = JSON.parse(output.body);
            var lat1 = parsedData.results[0].geometry.location.lat;
            var lon1 = parsedData.results[0].geometry.location.lng;
            // console.log(parsedData.results[0].geometry.location);
            request('https://api.wheretheiss.at/v1/satellites/25544', function(err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    var parsedData = JSON.parse(result.body);
                    var lat2 = parsedData.latitude.toFixed(2);
                    var lon2 = parsedData.longitude.toFixed(2);
                    var p1 = new LatLon(lat1, lon1);
                    var p2 = new LatLon(lat2, lon2);
                    var d = p1.distanceTo(p2);
                    // console.log(lat2);
                    // console.log(lon2);
                    console.log('Your distance to the spaceship now is: ' + d);
                }
            });
        }
    });

}


//using request to get ISS's current location
// function getIssLocation() {
//     request('http://api.open-notify.org/iss-now.json', function(err, result) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             var parsedData = JSON.parse(result.body);
//             var latitude = parsedData.iss_position.latitude.toFixed(2);
//             var longitude = parsedData.iss_position.longitude.toFixed(2);

//             console.log('Latitude: ' + latitude + '\n' + 'Longitude: ' + longitude);
//         }
//     });
// }
// console.log(getIssLocation());

LatLon.prototype.distanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var R = radius;
    var φ1 = this.lat.toRadians(),  λ1 = this.lon.toRadians();
    var φ2 = point.lat.toRadians(), λ2 = point.lon.toRadians();
    var Δφ = φ2 - φ1;
    var Δλ = λ2 - λ1;

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2)
          + Math.cos(φ1) * Math.cos(φ2)
          * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
};

//calculate the distance
// function getDistance(lat1, lon1, lat2, lon2) {
//     var R = 6371e3; // metres
//     var φ1 = lat1.toRadians();
//     var φ2 = lat2.toRadians();
//     var Δφ = (lat2 - lat1).toRadians();
//     var Δλ = (lon2 - lon1).toRadians();

//     var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//         Math.cos(φ1) * Math.cos(φ2) *
//         Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     var d = R * c;
//     return d;
// }