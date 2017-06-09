(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminTempScore', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-temp-score/list.html',
			controller: 'pAdminTempScoreCtrl'
		}
	});
	app.controller('pAdminTempScoreCtrl', function($scope) {
		$scope.datas = [{
			username: '朱元璋',
			score: '99'
		}, {
			username: '徐达'
		}, {
			username: '李善长',
			score: '90'
		}, {
			username: '常遇春'
		}, {
			username: '刘伯温',
			score: '89'
		}]
	});
})()