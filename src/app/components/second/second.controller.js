(function() {
  'use strict';

  angular
    .module('task')
    .controller('SecondController', SecondController);

  /** @ngInject */
  function SecondController($resource) {
    var vm = this;
    console.log("hi");
    var populationResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&');

    vm.getPopulation = function() {
      vm.populationResponseyear1 = populationResource.query({
        key: 'd8728be2e1edba8269504d24bc0f14915007d9a2', SEX: '0', FIPS: vm.countryname, time: vm.year1
      });
      vm.populationResponseyear2 = populationResource.query({
        key: 'd8728be2e1edba8269504d24bc0f14915007d9a2', SEX: '0', FIPS: vm.countryname, time: vm.year2
      });
      console.log(vm.populationResponseyear1);
      console.log(vm.populationResponseyear2);
    };


  }
})();
