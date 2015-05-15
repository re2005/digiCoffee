app.factory('getCoffee', ['$http', function($http) {

  var url = "http://api.kpndigital.nl:3000/coffees";

  return $http.get(url) 
			.success(function(data) { 
			  return data;
			}) 
			.error(function(err) { 
			  return err; 
			}); 
}]);



app.factory("Coffee", function($resource) {
	var	url = "http://api.kpndigital.nl:3000/coffees/:id";
	return $resource(url);
});
