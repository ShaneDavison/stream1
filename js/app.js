
var scPlayer = angular.module('scPlayer', [
  'ngRoute',
  'scControllers'
]);




scPlayer.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/trackspage.html',
        controller: 'sclistCtrl'
      })
  	  .when('/favourites', {
        templateUrl: 'partials/favourites.html',
        controller: 'favouritesCtrl'
      })
	  .when('/playlists', {
        templateUrl: 'partials/playlists.html',
        controller: 'playlistCtrl'
      })
  


  }]);