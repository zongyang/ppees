(function() {
	var app = angular.module('ppees.plugins');
	app.directive('pFrontAppeal', function(config) {
		var home = config.plugins;
		return {
			restrict: 'AE',
			templateUrl: home + 'front-appeal/list.html',
			controller:'pFrontAppealCtrl'
		}
	});
	app.controller('pFrontAppealCtrl', function($scope) {
		$scope.datas = [{
			appealer: '徐达',
			appealContent: '明知我病了吃不了鸭子，为毛还送给本王吃？',
			answer: '朱元璋',
			answerContent: '喂...什么？信号不好，朕...听...不...见...'
		}, {
			appealer: '李善长',
			appealContent: '你骗人，你发的免死金牌不管用...唔...'
		}, {
			appealer: '常遇春',
			appealContent: '俺是病死的，不怪陛下。',
			answer: '朱元璋',
			answerContent: '放心去吧，朕会厚葬爱卿的。'
		}, {
			appealer: '刘伯温',
			appealContent: '余与诸葛孔明齐名，陛下厚此薄彼，故 意打压我，竟然给我如此低的官职，算我看错你了！哼...'
		}]
	});
})()