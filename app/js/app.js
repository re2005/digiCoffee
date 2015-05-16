'use strict';

angular.module('digitalCoffee', [
	'ngRoute',
	'ngResource',
	'mobile-angular-ui'
	]).config(function($routeProvider) {
	$routeProvider.when('/',              {templateUrl: 'views/home.html', reloadOnSearch: false});
	$routeProvider.when('/addcoffee',        {templateUrl: 'views/add_coffee.html', reloadOnSearch: false});

});
