(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pFrontScoreUser', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'front-score-user/user.html',
			controller: 'pFrontScoreUserCtrl'
		}
	});
	app.controller('pFrontScoreUserCtrl', function($scope) {
		$scope.datas = [{
			name: '德',
			items: {
				'尊重领导': 100,
				'顾全大局': 100,
				'团结协作': 100,
				'廉洁自律': 100
			}
		}, {
			name: '能',
			items: {
				'学习法律法规': 100,
				'学习方针政策': 100,
				'学习专业知识': 100,
				'学习为人之道': 100
			}
		}, {
			name: '勤',
			items: {
				'勤奋工作': 100,
				'勤俭节约': 100
			}
		}, {
			name: '绩',
			items: {
				'成果': 100,
				'业绩': 100
			}
		}, {
			name: '廉',
			items: {
				'廉洁奉公': 100,
				'严格自律': 100
			}
		}];
	});
})()