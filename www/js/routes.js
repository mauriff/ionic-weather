angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('home', {
    url: '/page9',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('cart', {
    url: '/page10',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('tiempo', {
    url: '/page11',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page9')



});
