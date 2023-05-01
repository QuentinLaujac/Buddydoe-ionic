/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('BuddyArroundCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicTabsDelegate) {

    ionicMaterialMotion.pushDown({
    	selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
    	selector: '.animate-fade-slide-in .item'
    });

     $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    }
});