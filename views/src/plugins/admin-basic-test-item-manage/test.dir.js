(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminBasicTestItemMamage', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-basic-test-item-manage/test.html',
			controller: 'pAdminBasicTestItemMamageCtrl'
		}
	});
	app.controller('pAdminBasicTestItemMamageCtrl', function($scope) {
		$scope.datas = [{
			name: '德',
			items: [{
				name: '尊重领导',
				content: '不说不该说的话，不表不该表的态，不吃不该吃的请，不受不该受的礼，不做不该做的事，不建不该建的议，不逾不该逾的矩。'
			}, {
				name: '顾全大局',
				content: '不推过，不扯皮，不耍横，不张狂，不说情，摆正位置，找准角色。'
			}, {
				name: '团结协作',
				content: '为人宽容厚道好相处，做事公正廉明能周全。能够时刻维护集体形象，维护政府形象，维护个人形象'
			}, {
				name: '廉洁自律',
				content: 'xxxxxx'
			}]
		}, {
			name: '能',
			items: [{
				name: '学习法律法规',
				content: '学习法律法规学习法律法规学习法律法规学习法律法规学习法律法规学习法律法规。'
			}, {
				name: '学习方针政策',
				content: '学习方针政策学习方针政策学习方针政策学习方针政策。'
			}, {
				name: '学习专业知识',
				content: '学习专业知识学习专业知识学习专业知识。'
			}, {
				name: '学习为人之道',
				content: '学习为人之道学习为人之道学习为人之道学习为人之道学习为人之道。'
			}]
		}, {
			name: '勤',
			items: [{
				name: '勤奋工作',
				content: '把事业当天职，视懒惰为耻辱。'
			}, {
				name: '勤俭节约',
				content: '积极做到手勤、腿勤、嘴勤、脑勤。以勤补拙、以勤养德、以勤修身、以勤求绩、以勤立信、以勤做人。'
			}]
		}, {
			name: '绩',
			items: [{
				name: '成果',
				content: '靠成绩展示能力，表现水平，塑造自我。'
			}, {
				name: '业绩',
				content: '不仅愿想愿说愿做，而且敢想敢说敢做，还要会想会说会做，更要正想正说正做。'
			}]
		}, {
			name: '廉',
			items: [{
				name: '廉洁奉公',
				content: '廉洁奉公，廉洁奉公。'
			}, {
				name: '严格自律',
				content: '严格自律严格自律严格自律严格自律严格自律。'
			}]
		}];
	});
})()