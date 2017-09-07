(function () {
    'use strict';

    angular
        .module('app')
        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
              .setPrefix('angularShop')
              .setStorageType('localStorage');
        });
})();