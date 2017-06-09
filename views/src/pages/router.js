(function() {
	var app = angular.module('ppees.router', ['ui.router','ppees.utils','ppees.plugins']);
	app.config(function($stateProvider, $urlRouterProvider, config) {
		var home = config.pages;
		$urlRouterProvider.otherwise('/front-score');
		$stateProvider
			.state('admin-index', {
				url: '/admin-index',
				templateUrl: home + 'admin-index.html'
			})
			.state('admin-basic-test-item-mamage', {
				url: '/admin-basic-test-item-mamage',
				templateUrl: home + 'admin-basic-test-item-mamage.html'
			})
			.state('admin-temp-test-item-mamage', {
				url: '/admin-temp-test-item-mamage',
				templateUrl: home + 'admin-temp-test-item-mamage.html'
			})
			.state('admin-user', {
				url: '/admin-user',
				templateUrl: home + 'admin-user.html'
			})
			.state('admin-temp-score', {
				url: '/admin-temp-score',
				templateUrl: home + 'admin-temp-score.html'
			})
			.state('admin-temp-score-user', {
				url: '/admin-temp-score-user',
				templateUrl: home + 'admin-temp-score-user.html'
			})
			.state('admin-appeal-manage', {
				url: '/admin-appeal-manage',
				templateUrl: home + 'admin-appeal-manage.html'
			})
			.state('admin-export', {
				url: '/admin-export',
				templateUrl: home + 'admin-export.html'
			})
			.state('front-score', {
				url: '/front-score',
				templateUrl: home + 'front-score.html'
			})
			.state('front-score-user', {
				url: '/front-score-user',
				templateUrl: home + 'front-score-user.html'
			})
			.state('front-user', {
				url: '/front-user',
				templateUrl: home + 'front-user.html'
			})
			.state('front-appeal', {
				url: '/front-appeal',
				templateUrl: home + 'front-appeal.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: home + 'login.html'
			})
	});
})()