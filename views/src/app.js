(function() {
	var app = angular.module('ppees', [
		'ppees.router',
		'ppees.plugins'
	]);
	app.controller('ppeesCtrl', function($scope) {
		console.log('init');
	});
})()