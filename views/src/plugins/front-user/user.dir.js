(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pFrontUser', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'front-user/user.html'
		}
	});
	app.directive('pFrontUserBasicScore', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'front-user/basic-score.html',
			scope:{},
			controller: 'pFrontUserBasicScoreCtrl'
		}
	});
	app.directive('pFrontUserTempScore', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'front-user/temp-score.html',
			scope:{},
			controller: 'pFrontUserTempScoreCtrl'
		}
	});
	app.controller('pFrontUserBasicScoreCtrl', function($scope) {
		$scope.datas = [{
			name: '德',
			items: [{
				name: '尊重领导',
				score: 100
			}, {
				name: '顾全大局',
				score: 100
			}, {
				name: '团结协作',
				score: 100
			}, {
				name: '廉洁自律',
				score: 100
			}]
		}, {
			name: '能',
			items: [{
				name: '学习法律法规',
				score: 100
			}, {
				name: '学习方针政策',
				score: 100
			}, {
				name: '学习专业知识',
				score: 100
			}, {
				name: '学习为人之道',
				score: 100
			}]
		}, {
			name: '勤',
			items: [{
				name: '勤奋工作',
				score: 100
			}, {
				name: '勤俭节约',
				score: 100
			}]
		}, {
			name: '绩',
			items: [{
				name: '成果',
				score: 100
			}, {
				name: '业绩',
				score: 100
			}]
		}, {
			name: '廉',
			items: [{
				name: '廉洁奉公',
				score: 100
			}, {
				name: '严格自律',
				score: 100
			}]
		}];
	});
	app.controller('pFrontUserTempScoreCtrl', function($scope) {
		$scope.datas = [{
			name: '2017第一季度考核',
			score: 100
		}, {
			name: '2016第四季度考核',
			score: 100
		}, {
			name: '2016年度考核',
			score: 100
		}, {
			name: '业务分析',
			score: 100
		}, {
			name: '理论考试',
			score: 100
		}, {
			name: '两学一做',
			score: 100
		}];
	});
})()