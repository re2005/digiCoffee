'use strict';


angular.module('digitalCoffee').controller('MainController', function($rootScope, $scope, Coffee){


	var getData = function() {
		// Grab the DB results
		Coffee.query(function(data) {
			$scope.posts = data;
		});
	};

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
	// Read the inputs and send by $resource the data to the API
	$scope.processForm = function() {
		var data = $scope.formData;
		if (data) {
			Coffee.save(data);
			$scope.posts.push(data);
			$scope.formData = {};
				
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
		searchBox : 'Search something'
	};



	// Needed for the loading screen
	$rootScope.$on('$routeChangeStart', function(){
		$rootScope.loading = true;
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.loading = false;
	});


});
