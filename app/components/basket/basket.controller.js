(function () {
    'use strict';

    angular
      .module('app')
      .controller('BasketCtrl', BasketCtrl);

    BasketCtrl.$inject = ['basketService'];

    /* @ngInject */
    function BasketCtrl(basketService) {
        var vm = this;
        vm.basket = basketService.getBasket();
        vm.increase = increase;
        vm.decrease = decrease;

        function increase(product) {
            basketService.addToBasket(product);
        }

        function decrease(product) {
            basketService.removeFromBasket(product);
        }
    }
})();
