'use strict';

angular.module('digitalCoffee').directive('coffeeApp', function() { 
	return { 
		restrict: 'E', 
		scope: { 
			info: '=' 
		}, 
		templateUrl: 'views/directive_list_items.html' 
	}; 
});



angular.module('digitalCoffee').directive('ngConfirmClick', [
	function(){
		return {
			link: function (scope, element, attr) {
				var msg = attr.ngConfirmClick || 'Are you sure?';
				var clickAction = attr.confirmedClick;
				element.bind('click',function () {
					if ( window.confirm(msg) ) {
						scope.$eval(clickAction);
					}
				});
			}
		};
}]);