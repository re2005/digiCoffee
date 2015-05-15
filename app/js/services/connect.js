app.factory('getCoffee', ['$http', function($http) {

  var url = "http://api.kpndigital.nl:3000/coffees";

  return $http.get(url) 
            .success(function(data) { 
              //console.log(data);
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);




app.factory('Post', ['ActiveResource', function(ActiveResource) {

        function Post(data) {
            this.number('id');
            this.string('title');
            this.string('subtitle');

            this.computedProperty('fullTitle', function() {
                return this.title + this.subtitle;
            }, ['title', 'subtitle']);

            this.hasMany('comments');
            this.belongsTo('author');
        };

        Post.inherits(ActiveResource.Base);
        Post.api.set('http://api.faculty.com');
        Post.dependentDestroy('comments');

        return Post;
}]);