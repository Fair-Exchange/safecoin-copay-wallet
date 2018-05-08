'use strict';
angular.module('copayApp.services')
  .factory('bitcoreSafe', function bitcoreSafeFactory(bwcService) {
    var bitcoreSafe = bwcService.getBitcoreSafe();
    return bitcoreSafe;
  });
