/* global angular, document, window */
'use strict';

angular.module('starter')

.controller('ProfileEventCtrl',function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicTabsDelegate, $ionicSlideBoxDelegate, $ionicScrollDelegate ) {
  
  var events = [{
    nom : "Shina",
    imgProfile:"img/profile/shina.png",
    imgEvent : "img/evenement/bowl.jpg",
    nameEvent: "Bowling à Lomme",
    desc : "3 personnes se sont inscrites à l'événement",
    resume: "le plus grand bowling de France avec ses 40 pistes, ses billiards, ses jeux, son restaurant, sa salle de séminaire"
  },
  {
    nom : "Kinepolis Lomme",
    imgProfile:"img/evenement/logo.png",
    imgEvent : "img/evenement/kinepolis.jpg",
    nameEvent: 'Avant première pour "Captain America : Civil War"',
    desc : "20 personnes se sont inscrites à l'événement",
    resume: "Le Château d'Isenghien est un édifice situé à Lomme qui sert désormais de façade à un cinéma multiplexe de la chaîne Kinépolis."
  },
  {
    nom : "Max",
    imgProfile:"img/profile/max.png",
    imgEvent : "img/evenement/match.jpg",
    nameEvent: "Match Losc vs OM au stade Pierre Mauroy",
    desc : "2 personnes se sont inscrites à l'événement",
    resume: "Le Stade Pierre-Mauroy est un stade de football pouvant être configuré en Arena, situé à Villeneuve-d'Ascq, commune de la métropole européenne de Lille."
  }
  ];

  $scope.event = events[$stateParams.idprofile];

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

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

})