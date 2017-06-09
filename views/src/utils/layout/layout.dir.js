(function() {
	var app = angular.module('ppees.utils');
	app.directive('pLayout', function(config) {
		var home = config.utils;
		return {
			restrict: 'AE',
			transclude: true,
			scope: {
				admin: '@'
			},
			templateUrl: home + 'layout/layout.html'
		}
	});
	app.directive('pHeader', function(config) {
		var home = config.utils;
		return {
			restrict: 'AE',
			templateUrl: home + 'layout/header.html'
		}
	});
	app.directive('pFooter', function(config) {
		var home = config.utils;
		return {
			restrict: 'AE',
			templateUrl: home + 'layout/footer.html'
		}
	});
})()