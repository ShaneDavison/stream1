var scControllers = angular.module('scControllers', []);

  
scControllers.controller('sclistCtrl', ['$scope', '$http', function ($scope, $http) {
	
	SC.initialize({
	  client_id: 'f911752b0d31492eca3ea086fbc9e8fd',
	  redirect_uri: 'http://localhost/callback.html'

	});

// initiate auth popup
/*"https://api.soundcloud.com/tracks/167883259/stream?client_id=f911752b0d31492eca3ea086fbc9e8fd"
*/

	SC.get("/users/4268267/tracks", { user_id: 4268267, limit: 10 })
		.then(function(tracks){
	  		$scope.tracks = tracks;
	  		$scope.$apply();
		})

}]);	





 scControllers.controller('favouritesCtrl', ['$scope', '$http',
  function ($scope, $http) {
SC.initialize({
  client_id: 'f911752b0d31492eca3ea086fbc9e8fd',
  redirect_uri: 'http://localhost/'

});

SC.get("/users/4268267/favorites", { user_id: 4268267, limit: 500 })
			.then(function(favourites){
		  		$scope.favourites = favourites;
		  		$scope.$apply();
			})

}]);			

 scControllers.controller('playlistCtrl', ['$scope', '$http',
  function ($scope, $http) {
SC.initialize({
  client_id: 'f911752b0d31492eca3ea086fbc9e8fd',
  redirect_uri: 'http://localhost/'

});

SC.get("/users/4268267/playlists", { user_id: 4268267, limit: 500 })
			.then(function(playlists){
		  		$scope.playlists = playlists;
		  		$scope.$apply();
			})
}]);	


 scControllers.controller('feedCtrl', ['$scope', '$http',
  function ($scope, $http) {
SC.initialize({
  client_id: 'f911752b0d31492eca3ea086fbc9e8fd',
  redirect_uri: 'http://localhost/'

});



SC.get("/users/4268267/favorites", { user_id: 4268267, limit: 500 })
			.then(function(feed){
		  		$scope.feed = feed;
		  		$scope.$apply();
			});



scControllers.controller('srcCtrl', function($scope, $http) {
    $http.get("https://api.soundcloud.com/tracks/167883259/stream?client_id=f911752b0d31492eca3ea086fbc9e8fd")
    .then(function(response) {
        $scope.srcCtrl = response.data;
        console.log(response)
    });
});


}]);
