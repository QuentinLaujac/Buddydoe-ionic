/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('ProfileBuddyCtrl',function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicTabsDelegate, $ionicSlideBoxDelegate, $ionicScrollDelegate ) {
  
  $ionicSlideBoxDelegate.update();
  $scope.onUserDetailContentScroll = onUserDetailContentScroll;

  var profils = [{
    nom : "Ben",
    age : "27",
    profession:"Director (business)",
    img:"img/profile/ben.png"
  },
  {
    nom : "Agathe",
    age : "27",
    profession:"Le soleil bleu",
    img:"img/profile/femme-brune.png"
  },
  {
    nom : "Fred",
    age : "32",
    img:"img/profile/fred.png"
  },
  {
    nom : "Jean",
    age : "24",
    profession:"Etudiant en informatique",
    img:"img/profile/jean.png"
  },
  {
    nom : "John",
    age : "34",
    profession:"Chargé de communication",
    img:"img/profile/john.png"
  },
  {
    nom : "Max",
    age : "27",
    img:"img/profile/max.png"
  },
  {
    nom : "Melindra",
    age : "29",
    profession:"Adjointe de point vert",
    img:"img/profile/melindra.png"
  },
  {
    nom : "Melissa",
    age : "22",
    img:"img/profile/melissa.png"
  }
  ];

  $scope.profile = profils[$stateParams.idprofile];



  function onUserDetailContentScroll(){
    var scrollDelegate = $ionicScrollDelegate.$getByHandle('userDetailContent');
    var scrollView = scrollDelegate.getScrollView();
    $scope.$broadcast('userDetailContent.scroll', scrollView);
  }
})

