app.controller('MainController', function($rootScope, $scope, getCoffee, Coffee){



	// Data model for the form inputs
	$scope.coffeeModel = {
		brand : "Douwe Egberts",
		type : "Espresso",
		description : "nice coffee",
		amount : 500,
		price : 15
	};



	// Grab the DB results
	Coffee.query(function(data) {
		$scope.posts = data;
	});




	// Delete Coffee Post
	$scope.deleteCoffee = function(item, id, index) {
		console.log(id);
		//Coffee.delete({ id: id }); // SEND delete request
		item.splice(index, 1);
	};




	$scope.getUnicCoffee = function(item_id) {
		Coffee.get({ id: item_id }, function(data) {
			$scope.postUnic = data;
			console.log(data);
		});
	}



	// Form handler
	$scope.formData = {};

	// process the form
	$scope.processForm = function() {

		var data = $scope.formData
		console.log(data);
/*
		$http({
		method  : 'POST',
		url     : 'http://api.kpndigital.nl:3000/coffees/',
		data    : $.param($scope.formData),  // pass in data as strings
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		})

		.success(function(data) {
		
		console.log(data);

		if (!data.success) {
		  // if not successful, bind errors to error variables
		  $scope.errorBrand = data.errors.brand;
		  $scope.errorPrice = data.errors.price;
		} else {
		  // if successful, bind success message to message
		  $scope.message = data.message;
		}
		});
*/

	};














//
// 'Forms' screen
//  
$scope.rememberMe = true;
$scope.email = 'me@example.com';

$scope.login = function(data) {
	alert('You submitted the login form');
};



$scope.master = {};
$scope.update = function(coffee) {
	$scope.master = angular.copy(coffee);
};
$scope.reset = function() {
	$scope.coffee = angular.copy($scope.master);
};
$scope.reset();





// Needed for the loading screen
$rootScope.$on('$routeChangeStart', function(){
	$rootScope.loading = true;
});
$rootScope.$on('$routeChangeSuccess', function(){
	$rootScope.loading = false;
});


});


