(function () {
    'use strict';

    angular
        .module('app')
        .directive('basketState', basketState);

    basketState.$inject = ['basketService'];

    /* @ngInject */
    function basketState(basketService) {

        return {
            restrict: 'E',
            replace: false,
            template: '<span ng-hide="getBasketItemCount() == 0" class="product-count">{{getBasketItemCount()}}</span>' +
                      '<span ng-hide="getBasketSum() == 0" class="product-sum">{{getBasketSum() | currency:"USD$ "}}</span>',
            link: function (scope, el, attrs) {
                scope.getBasketItemCount = basketService.getBasketItemCount;
                scope.getBasketSum = basketService.getBasketSum;
            }
        };
    }
})();
