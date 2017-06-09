(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pAdminIndex', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-index/index.html'
		}
	});
	app.directive('pAdminIndexLingdao', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-index/index-lingdao.html'
		}
	});
	app.directive('pAdminIndexKeshi', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'admin-index/index-keshi.html'
		}
	});
})()