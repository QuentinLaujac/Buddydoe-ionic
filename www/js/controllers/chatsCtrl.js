/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('ChatsCtrl', function($scope, $ionicModal, $ionicPopover, Chats, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicTabsDelegate) {

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

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

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
};
});