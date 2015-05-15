
app.directive('coffeeApp', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'views/directive_list_items.html' 
  }; 
});
