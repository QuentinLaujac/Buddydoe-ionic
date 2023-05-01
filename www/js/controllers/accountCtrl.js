/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('AccountCtrl',function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicTabsDelegate, $ionicSlideBoxDelegate, $ionicScrollDelegate ) {
  
  $ionicSlideBoxDelegate.update();
  $scope.onUserDetailContentScroll = onUserDetailContentScroll

  function onUserDetailContentScroll(){
    var scrollDelegate = $ionicScrollDelegate.$getByHandle('userDetailContent');
    var scrollView = scrollDelegate.getScrollView();
    $scope.$broadcast('userDetailContent.scroll', scrollView);
  }
})
