(function () {
    'use strict';

    angular
        .module('app')
        .service('basketSyncService', basketSyncService);

    basketSyncService.$inject = ['$http'];

    /* @ngInject */
    function basketSyncService($http) {

        var API_URL = "PUT YOUR URL HERE";

        function syncBasket(basket) {
            // $http.post(API_URL + '/basket/sync', basket);
            return;
        }

        return {
            syncBasket: syncBasket
        }
    }
})();
