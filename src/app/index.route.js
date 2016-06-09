(function() {
  'use strict';

  angular
    .module('task')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/first',
        templateUrl: 'app/components/landing/landing.html',
        controller: 'LandController',
        controllerAs: 'land'
      })
      .state('second', {
        url: '/second',
        templateUrl: 'app/components/second/second.html',
        controller: 'SecondController',
        controllerAs: 'second'
      })
      .state('third', {
        url: '/third',
        templateUrl: 'app/components/third/third.html',
        controller: 'ThirdController',
        controllerAs: 'third'
      });

    $urlRouterProvider.otherwise('/first');
  }

})();
