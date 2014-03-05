'use strict';

//Setting up route
// angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  // function($stateProvider, $urlRouterProvider) {
    // // For unmatched routes:
    // $urlRouterProvider.otherwise('/');
// 
    // // states for my app
    // $stateProvider
      // .state('all articles', {
        // url: '/articles',
        // templateUrl: 'views/articles/list.html'
    // })
      // .state('create article', {
        // url: '/articles/create',
        // templateUrl: 'views/articles/create.html'
    // })
      // .state('edit article', {
        // url: '/articles/:articleId/edit',
        // templateUrl: 'views/articles/edit.html'
    // })
      // .state('article by id', {
        // url: '/articles/:articleId',
        // templateUrl: 'views/articles/view.html'
    // })
      // .state('home', {
        // url: '/',
        // templateUrl: 'views/index.html'
    // });
// }
// ]);

angular.module('storm').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider
		.state('stormdashboard', {
			url: '/dashboard',
			templateUrl: 'views/storm1.html'
		});
}
]);

//Setting HTML5 Location Mode
// angular.module('storm').config(['$locationProvider',
  // function($locationProvider) {
    // $locationProvider.hashPrefix('!');
// }
// ]);
