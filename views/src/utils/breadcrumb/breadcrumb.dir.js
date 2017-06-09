(function() {
	var app = angular.module('ppees.utils');
	app.directive('pBreadcrumb', function(config) {
		var home = config.utils;
		return {
			restrict: 'AE',
			templateUrl: home + 'breadcrumb/breadcrumb.html'
		}
	});
})()