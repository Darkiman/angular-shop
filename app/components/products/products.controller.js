(function () {
    'use strict';

    angular
      .module('app')
      .controller('ProductsCtrl', ProductsCtrl);

    ProductsCtrl.$inject = ['$http', '$location', 'basketService'];

    /* @ngInject */
    function ProductsCtrl($http, $location, basketService) {
        var vm = this;
        vm.products = [];
        vm.addToBasket = addToBasket;


        function addToBasket(product) {
            basketService.addToBasket(product);
        }

        function activate() {
            $http.get('app/products.json')
               .success(function (data) {
                   vm.products = data;
              })
               .error(function () {
                   alert('could not find products.json');
               });
        }

        

        activate();
    }
})();
