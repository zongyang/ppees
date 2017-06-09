(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminTempTestItemMamage', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-temp-test-item-manage/test.html',
			controller: 'pAdminTempTestItemMamageCtrl'
		}
	});
	app.controller('pAdminTempTestItemMamageCtrl', function($scope) {
		$scope.datas = [{
			name: '2017第一季度考核',
			content: '2017第一季度考核2017第一季度考核',
			factor: 0.1
		}, {
			name: '2016第四季度考核',
			content: '2016第四季度考核2016第四季度考核2016第四季度考核',
			factor: 0.1
		}, {
			name: '2016年度考核',
			content: '2016年度考核2016年度考核2016年度考核2016年度考核2016年度考核',
			factor: 0.1
		}, {
			name: '业务分析',
			content: '业务分析业务分析',
			factor: 0.2
		}, {
			name: '理论考试',
			content: '理论考试理论考试理论考试',
			factor: 0.2
		}, {
			name: '两学一做',
			content: '学习共产党党章党规，学习贯彻习近平总书记系列重要讲话精神，做合格党员',
			factor: 0.3
		}];
	});
})()