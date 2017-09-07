(function () {
    'use strict';

    angular
        .module('app')
        .service('basketService', basketService);

    basketService.$inject = ['localStorageService', 'basketSyncService'];

    /* @ngInject */
    function basketService(localStorageService, basketSyncService) {

        var _basket = [];
        var PRODUCT_LIST_KEY = 'PRODUCT_LIST';
        var syncService = basketSyncService;

        fromStrorageToBasket();

        function addToBasket(product) {
            for (var i = 0; i < _basket.length; i++) {
                if (_basket[i].product.id == product.id) {
                    _basket[i].count++;
                    syncData();
                    return;
                }
            }

            _basket.push({ product: product, count: 1 });
            basketToStorage();
        }

        function removeFromBasket(product) {
            for (var i = 0; i < _basket.length; i++) {
                if (_basket[i].product.id == product.id) {
                    if (_basket[i].count == 1) {
                        _basket.splice(i, 1);
                    }
                    else {
                        _basket[i].count--;
                    };
                    syncData();
                    return;
                }
            }
        }

        function getBasketItemCount() {
            var count = 0;
            for (var i = 0; i < _basket.length; i++) {
                count = count + _basket[i].count;
            }
            return count;
        }

        function getBasketSum() {
            var sum = 0;

            for (var i = 0; i < _basket.length; i++) {
                sum = sum + _basket[i].product.price * _basket[i].count;
            }
            return sum;
        }

        function getBasket() {
            return _basket;
        }

        function fromStrorageToBasket() {
            var temp = localStorageService.get(PRODUCT_LIST_KEY);
            if (temp) {
                _basket = temp;
            }
        }

        function syncData()  {
            basketToStorage();
            syncService.syncBasket();
        }

        function basketToStorage() {
            localStorageService.set(PRODUCT_LIST_KEY, _basket);
        }

        return {
            addToBasket: addToBasket,
            removeFromBasket: removeFromBasket,
            getBasketItemCount: getBasketItemCount,
            getBasketSum: getBasketSum,
            getBasket: getBasket,
        }
    }
})();
