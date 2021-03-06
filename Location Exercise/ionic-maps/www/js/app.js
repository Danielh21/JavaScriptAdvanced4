// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");

  
 
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var latLng;
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    let element = document.getElementById('map');
    let map2 =  google.maps.create(element);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    latLng = new google.maps.LatLng(lat, long);

 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });

//   google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
//   var marker = new google.maps.Marker({
//       map: $scope.map,
//       animation: google.maps.Animation.DROP,
//       position: latLng
//   });      
 
//   var infoWindow = new google.maps.InfoWindow({
//       content: "Here I am!"
//   });
 
//   google.maps.event.addListener(marker, 'click', function () {
//       infoWindow.open($scope.map, marker);
//   });
 
// });

});



