(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminTempScoreUser', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-temp-score-user/user.html'
		}
	});

})()