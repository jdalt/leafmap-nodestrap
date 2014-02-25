var L = require('leaflet');
var request = require('superagent');
var map = L.map('map').setView([44.9833, -93.266730], 7); // mpls

L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
  key: 'BC9A493B41014CAABB98F0471D759707',
  styleId: 22677
}).addTo(map);

L.Icon.Default.imagePath = 'images';
