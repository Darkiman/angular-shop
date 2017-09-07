(function () {
    'use strict';

    angular
        .module('app')
        .component('products', {
            bindings: {
            },
            templateUrl: 'app/components/products/products.html',
            controller: 'ProductsCtrl',
            controllerAs: 'vm'
        });
})();