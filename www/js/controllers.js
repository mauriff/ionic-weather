angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, $state,$http) {

    $scope.ciudad = {
        nombre: ''
    };
    $scope.page = {};
    //Obtener reserver por el eamil

    $scope.getClima = function (example) {


  $http({
	method: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather?appid=6e677030195aa712c6590e4eb6fbc78a&lang=es&units=metric&q=' + $scope.ciudad.nombre
}).then(function successCallback(response) {
  $scope.page.weather=  response.data.weather;
  $scope.page.temperatura = response.data.main.temp + "°C";
  $scope.page.img = "http://openweathermap.org/img/w/"+$scope.page.weather[0].icon+".png"

}, function errorCallback(response) {
alert("error");
});
};

})

.controller('cartCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope, $timeout, $state, $http) {

  $scope.page = {};
  $scope.page.temperatura = '19°C'
  //http://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=6e677030195aa712c6590e4eb6fbc78a





})
