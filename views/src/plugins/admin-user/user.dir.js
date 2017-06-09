(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminUser', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-user/user.html',
			controller: 'pAdminUserCtrl'
		}
	});
	app.controller('pAdminUserCtrl', function($scope) {
		$scope.datas = [{
			account: 'zhuyuanzhang',
			username: '朱元璋',
			mobile: '123456789101',
			email: 'zhuyuanzhang@gmail.com',
			job: '领导',
			role: '系统管理员'
		},
		{
			account: 'xuda',
			username: '徐达',
			mobile: '123456789102',
			email: 'xuda@gmail.com',
			job: '右丞相',
			role: '普通用户',
			department:'中书省'
		},{
			account: 'lishanchang',
			username: '李善长',
			mobile: '123456789103',
			email: 'lishanchang@gmail.com',
			job: '左丞相',
			role: '考核小组',
			department:'中书省'
		},{
			account: 'changyuchun',
			username: '常遇春',
			mobile: '123456789104',
			email: 'changyuchun@gmail.com',
			job: '中书平章军国重事',
			role: '普通用户',
			department:'兵部'
		},{
			account: 'liubowen',
			username: '刘伯温',
			mobile: '123456789105',
			email: 'liubowen@gmail.com',
			job: '诚意伯',
			role: '领导干部',
			department:'吏部'
		}]
	});
})()