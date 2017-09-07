(function () {
    'use strict';

    angular
        .module('app')
        .component('basket', {
            bindings: {
            },
            templateUrl: 'app/components/basket/basket.html',
            controller: 'BasketCtrl',
            controllerAs: 'vm'
        });
})();