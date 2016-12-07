angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);


    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.doctors = [{
     id: 1,
     name: "Bons Tralee",
     doctorname: "Dr. Ted Hansen",
     street: "Strand Street ",
     state :'Tralee Kerry',
     city:'Kerry',
     image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
     lat:52.269609,
     lon:-9.713111,
     phone: "(066) 43423423"
  },
  {
    id: 2,
    name: "Mercy Hospital ",
        doctorname: "Dr. Tony Mackey",
    street: "Henry Street Cork City",
    state :'Cork',
    city:'Cork',
    image:'https://nyoobserver.files.wordpress.com/2016/08/screen-shot-2016-08-24-at-11-01-59-am.png?w=635',
    lat:51.8986744,
    lon:-8.4849214,
    phone: "(065) 3423423"
  },
  {
    id: 3,
    name: "Temple Street Hospital",
        doctorname: "Dr. Rob Howlett",
    street: "O'Connell Street Dublin",
    state :'Dublin',
    city:'Dublin',
    image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
    lat:38.195070,
    lon:-84.878694,
    phone: "(056) 23423423"
  },
  {
    id: 4,
    name: "Limerick Hospital",
        doctorname: "Dr. Eddy Malone",
    street: " Main Street",
    state :'Limerick',
    city:'Limerick',
    image:'http://sportysnetwork.com/airfacts/wp-content/blogs.dir/13/files/2015/12/doctor-facing-amera.jpg',
    lat:38.195070,
    lon:-84.878694,
    phone: "(854) 34534544"
  }];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('WeatherCtrl',[ '$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation){
  // $ionicSideMenuDelegate.canDragContent(false);
    $scope.map = {center: {latitude: 51.8986744, longitude: -8.4849214}, zoom: 8 };
    $scope.options = {scrollwheel: true};
    $scope.markers = []
    // get position of user and then set the center of the map to that position
    $cordovaGeolocation.getCurrentPosition().then(function (position) {
      console.log('getCurrentPosition');
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat);
      console.log(long);
      $scope.map = {center: {latitude: lat, longitude: long}, zoom: 16 };
      //just want to create this loop to make more markers
      for(var i=0; i<5; i++) {
        $scope.markers.push({
          id: $scope.markers.length,
          latitude: lat + (i * 0.0100),
          longitude: long + (i * 0.005),
          title: 'm' + i
        })
      }
      // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
var OpenWeatherAppKey = "528af693002d6bb26276c735608debab";

var queryString =
 'http://api.openweathermap.org/data/2.5/weather?lat='
 + lat + '&lon=' + long + '&appid=' + OpenWeatherAppKey + '&units=imperial';

$.getJSON(queryString, function (results) {

   if (results.weather.length) {

       $.getJSON(queryString, function (results) {

           if (results.weather.length) {

               $('#description').text(results.name);
               $('#temp').text(results.main.temp);
               $('#wind').text(results.wind.speed);
               $('#humidity').text(results.main.humidity);
               $('#visibility').text(results.weather[0].main);

               var sunriseDate = new Date(results.sys.sunrise);
               $('#sunrise').text(sunriseDate.toLocaleTimeString());

               var sunsetDate = new Date(results.sys.sunrise);
               $('#sunset').text(sunsetDate.toLocaleTimeString());

               alert('' + results.name);
           }

       });
   }
})





    }, function(err) {
      console.log('Error: ' + err);
    });
}])

.controller('BrowseCtrl',[ '$scope', '$cordovaGeolocation', function($scope, $cordovaGeolocation){
  // $ionicSideMenuDelegate.canDragContent(false);
    $scope.map = {center: {latitude: 51.8986744, longitude: -8.4849214}, zoom: 8 };
    $scope.options = {scrollwheel: true};
    $scope.markers = []
    // get position of user and then set the center of the map to that position
    $cordovaGeolocation.getCurrentPosition().then(function (position) {
      console.log('getCurrentPosition');
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      console.log(lat);
      console.log(long);
      $scope.map = {center: {latitude: lat, longitude: long}, zoom: 16 };
      //just want to create this loop to make more markers
      for(var i=0; i<5; i++) {
        $scope.markers.push({
          id: $scope.markers.length,
          latitude: lat + (i * 0.0100),
          longitude: long + (i * 0.005),
          title: 'm' + i
        })
      }


    }, function(err) {
      console.log('Error: ' + err);
    });
}]);
