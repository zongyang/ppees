(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminExport', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-export/export.html',
			controller: 'pAdminExportCtrl'
		}
	});
	app.controller('pAdminExportCtrl', function($scope) {
		$scope.datas = [{
			userName: '朱元璋',
			baseScore: '30',
			tempScore: '70',
			total: '100'
		}, {
			userName: '徐达',
			baseScore: '30',
			tempScore: '60',
			total: '90'
		}, {
			userName: '常遇春',
			baseScore: '30',
			tempScore: '55',
			total: '85'
		}, {
			userName: '刘伯温',
			baseScore: '30',
			tempScore: '50',
			total: '80'
		}, {
			userName: '李善长',
			baseScore: '30',
			tempScore: '45',
			total: '75'
		}];
	});

})()