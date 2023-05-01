// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'ionic-material', 'ionMdInput', 'ionicApp', 'ionic.contrib.ui.cards'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
          }
        });

})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      controller: 'AppCtrl',
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.eventsAround', {
      url: '/eventsAround',
      views: {
        'tab-eventsAround': {
          templateUrl: 'templates/tab-eventsAround.html',
          controller: 'EventsAroundCtrl'
        }, 
        'fabContent': {
          template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
          controller: function ($timeout) {
            $timeout(function () {
              document.getElementById('fab-activity').classList.toggle('on');
            }, 200);
          }
        }
      }
    })

    .state('tab.profileEvent', {
      url: '/profileEvent/:idprofile',
      views: {
        'tab-eventsAround': {
          controller: 'ProfileEventCtrl',
          templateUrl: 'templates/profileEvent.html'
        }
      }
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.buddyAround', {
      url: '/buddyAround',
      views: {
        'tab-buddyAround': {
          templateUrl: 'templates/tab-buddyAround.html',
          controller: 'BuddyArroundCtrl'
        }
      }
    })


    .state('tab.profileBuddy', {
      url: '/profileBuddy/:idprofile',
      views: {
        'tab-buddyAround': {
          controller: 'ProfileBuddyCtrl',
          templateUrl: 'templates/profileBuddy.html'
        }
      }
    })

    .state('tab.profileBuddyEvent', {
      url: '/profileBuddyEvent/:idprofile',
      views: {
        'tab-eventsAround': {
          controller: 'ProfileBuddyCtrl',
          templateUrl: 'templates/profileBuddy.html'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/tab/eventsAround');
  })


.directive('headerShrink', function($document) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var resizeFactor, scrollFactor, blurFactor;
      var header = $document[0].body.querySelector('.about-header');
      $scope.$on('userDetailContent.scroll', function(event,scrollView) {
        if (scrollView.__scrollTop >= 0) {
          scrollFactor = scrollView.__scrollTop/3.5;
          header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, +' + scrollFactor + 'px, 0)';
        } else if (scrollView.__scrollTop > -70) {
          resizeFactor = -scrollView.__scrollTop/100 + 0.99;
          // blurFactor = -scrollView.__scrollTop/50;
          header.style[ionic.CSS.TRANSFORM] = 'scale('+resizeFactor+','+resizeFactor+')';
          // header.style.webkitFilter = 'blur('+blurFactor+'px)';
        }
      });
    }
  }
})
