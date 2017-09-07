'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ui.router',
  'LocalStorageModule'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products");

  $stateProvider.state('basket', {
      url: '/basket',
      component: 'basket',
  }).state('products', {
      url: '/products',
      component: 'products',
  });

}]);
