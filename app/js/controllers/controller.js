app.controller('MainController', function($rootScope, $scope, getCoffee){
// Add later to controler ", $firebaseObject"



  // Load data
  getCoffee.success(function(data) {
	$scope.getCoffeeData = data;
  });


$scope.isDayEmpty = function(){
    return $scope.getCoffeeData.length > 0 ? false : true;
}


  // User agent displayed in home page
  $scope.userAgent = navigator.userAgent;
  
  // Needed for the loading screen
  $rootScope.$on('$routeChangeStart', function(){
	$rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(){
	$rootScope.loading = false;
  });

  // Fake text i used here and there.
  $scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

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




});


