(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminTempTestItemMamageScore', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-temp-test-item-manage/score.html'
		}
	});
})()