(function() {
  'use strict';

  angular
    .module('task')
    .controller('LandController', LandController);

  /** @ngInject */
  function LandController($resource) {
    var vm = this;
    console.log("hi");
    var populationResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&');

    vm.getPopulation = function() {
      vm.populationResponse = populationResource.query({
        key: 'd8728be2e1edba8269504d24bc0f14915007d9a2', SEX: '0', FIPS: vm.countryname, time: vm.year
      });
      console.log(vm.populationResponse);
    };


  }
})();
