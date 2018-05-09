
'use strict';
angular.module('copayApp.services')
  .factory('sjcl', function bitcoreSafeFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
