(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pLogin', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'login/login.html'
		}
	});
})()