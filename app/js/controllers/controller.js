'use strict';


angular.module('digitalCoffee').controller('MainController', function($rootScope, $scope, Coffee, $window){


	// Get the resource and set in $scope
	var getData = function() {
		Coffee.query(function(data) {
			$scope.posts = data; // Grab the DB results set as "posts"
		});
	};
	// Run to set data to $scope
	getData();



	// Delete Coffee Post
	$scope.deleteCoffee = function(item, id, index) {
		console.log(id);
		Coffee.delete({ id: id }); // SEND delete request
		item.splice(index, 1);
	};


	// Process the form
	// Form data
	$scope.formData = {};
	
	// Read the inputs and send the data using $resource to the API
	$scope.processForm = function() {
		var data = $scope.formData;
		if (data) {

			Coffee.save(data);
			$scope.posts.push(data);
			$scope.resetCoffee();
			$window.alert($scope.messages.coffeeSent);
			setTimeout(function(){ 
				getData();
			}, 1000);

		} else {
			console.log('No data');
		}
	};
	// Autofill
	$scope.autofillCoffee = function() {
		$scope.formData = $scope.coffeeModel;
	};

	$scope.resetCoffee = function() {
		$scope.formData = {};
	};






	// Data model for the form inputs
	// Used for Autofill the Brand, Type.. etc
	$scope.coffeeModel = {
		brand : 'Nespresso',
		type : 'Espresso',
		description : 'Delicious Aroma',
		coffeeAmount : 20,
		price : 17.50
	};

	

	// Messages shared
	$scope.messages = {
		confirmAction : 'Are you sure you want to remove?',
		searchBox : 'Search something',
		coffeeSent : 'Congrats :) you have more coffee now!',
		onlyNumber : 'Please use number for price and amount'
	};



	// Needed for the loading screen
	$rootScope.$on('$routeChangeStart', function(){
		$rootScope.loading = true;
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.loading = false;
	});


});
