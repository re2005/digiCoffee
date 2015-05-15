app.controller('MainController', function($rootScope, $scope, getCoffee, Coffee){







	// Grab the DB results
	Coffee.query(function(data) {
		$scope.posts = data;
	});




	// Delete Coffee Post
	$scope.deleteCoffee = function(item, id, index) {
		console.log(id);
		Coffee.delete({ id: id }); // SEND delete request
		item.splice(index, 1);
	};


	// Autofill
	$scope.autofillCoffee = function() {
		$scope.formData = $scope.coffeeModel;
	};



	$scope.getUnicCoffee = function(item_id) {
		Coffee.get({ id: item_id }, function(data) {
			$scope.postUnic = data;
			console.log(data);
			
		});
	};




	// Form data
	$scope.formData = {};

	// Process the form
	$scope.processForm = function() {
		var data = $scope.formData;
		if (data) {
			Coffee.save(data);
		} else {
			console.log("No data")
		}
	};




	// Data model for the form inputs
	$scope.coffeeModel = {
		brand : "Douwe Egberts",
		type : "Espresso",
		description : "nice coffee",
		coffeeAmount : 500,
		price : 15
	};

	// App generic messages
	$scope.messages = {
		confirmAction : "Are you sure you want to remove?"
	};




	// Needed for the loading screen
	$rootScope.$on('$routeChangeStart', function(){
		$rootScope.loading = true;
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.loading = false;
});


});


