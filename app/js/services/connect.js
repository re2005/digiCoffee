'use strict';

angular.module('digitalCoffee').factory('Coffee', function($resource) {
	var	url = 'http://api.kpndigital.nl:3000/coffees/:id';
	return $resource(url);
});