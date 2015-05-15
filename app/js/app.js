var app = angular.module('digitalCoffee', [
	'ngRoute',
	'ngResource',
	'mobile-angular-ui'
	]);

app.config(function($routeProvider) {

	$routeProvider.when('/',              {templateUrl: 'views/home.html', reloadOnSearch: false});
	$routeProvider.when('/add-coffee',        {templateUrl: 'views/add_coffee.html', reloadOnSearch: false});

});