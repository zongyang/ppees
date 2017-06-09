(function() {
    var app = angular.module('ppees', [
        'ppees.router',
        'ppees.plugins'
    ]);
    app.controller('ppeesCtrl', function($scope) {
        console.log('init');
    });
})();
(function() {
    var app = angular.module('ppees.router', ['ui.router', 'ppees.utils', 'ppees.plugins']);
    app.config(function($stateProvider, $urlRouterProvider, config) {
        var home = config.pages;
        $urlRouterProvider.otherwise('/front-score');
        $stateProvider
            .state('admin-index', {
                url: '/admin-index',
                templateUrl: home + 'admin-index.html'
            })
            .state('admin-basic-test-item-mamage', {
                url: '/admin-basic-test-item-mamage',
                templateUrl: home + 'admin-basic-test-item-mamage.html'
            })
            .state('admin-temp-test-item-mamage', {
                url: '/admin-temp-test-item-mamage',
                templateUrl: home + 'admin-temp-test-item-mamage.html'
            })
            .state('admin-user', {
                url: '/admin-user',
                templateUrl: home + 'admin-user.html'
            })
            .state('admin-temp-score', {
                url: '/admin-temp-score',
                templateUrl: home + 'admin-temp-score.html'
            })
            .state('admin-temp-score-user', {
                url: '/admin-temp-score-user',
                templateUrl: home + 'admin-temp-score-user.html'
            })
            .state('admin-appeal-manage', {
                url: '/admin-appeal-manage',
                templateUrl: home + 'admin-appeal-manage.html'
            })
            .state('admin-export', {
                url: '/admin-export',
                templateUrl: home + 'admin-export.html'
            })
            .state('front-score', {
                url: '/front-score',
                templateUrl: home + 'front-score.html'
            })
            .state('front-score-user', {
                url: '/front-score-user',
                templateUrl: home + 'front-score-user.html'
            })
            .state('front-user', {
                url: '/front-user',
                templateUrl: home + 'front-user.html'
            })
            .state('front-appeal', {
                url: '/front-appeal',
                templateUrl: home + 'front-appeal.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: home + 'login.html'
            })
    });
})();
(function() {
    var app = angular.module('ppees.plugins', ['ppees.utils']);
})();
(function() {
    var app = angular.module('ppees.utils', []);
    app.constant('config', {
        plugins: 'dest/plugins/',
        pages: 'dest/pages/',
        utils: 'dest/utils/'
    });
})()

;
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminAppealManage', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-appeal-manage/appeal.html',
            controller: 'pAdminAppealManageCtrl'
        }
    });
    app.controller('pAdminAppealManageCtrl', function($scope) {
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
})();
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
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminExport', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-export/export.html',
            controller: 'pAdminExportCtrl'
        }
    });
    app.controller('pAdminExportCtrl', function($scope) {
        $scope.datas = [{
            userName: '朱元璋',
            baseScore: '30',
            tempScore: '70',
            total: '100'
        }, {
            userName: '徐达',
            baseScore: '30',
            tempScore: '60',
            total: '90'
        }, {
            userName: '常遇春',
            baseScore: '30',
            tempScore: '55',
            total: '85'
        }, {
            userName: '刘伯温',
            baseScore: '30',
            tempScore: '50',
            total: '80'
        }, {
            userName: '李善长',
            baseScore: '30',
            tempScore: '45',
            total: '75'
        }];
    });

})();
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
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminTempScore', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-temp-score/list.html',
            controller: 'pAdminTempScoreCtrl'
        }
    });
    app.controller('pAdminTempScoreCtrl', function($scope) {
        $scope.datas = [{
            username: '朱元璋',
            score: '99'
        }, {
            username: '徐达'
        }, {
            username: '李善长',
            score: '90'
        }, {
            username: '常遇春'
        }, {
            username: '刘伯温',
            score: '89'
        }]
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminTempScoreUser', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-temp-score-user/user.html'
        }
    });

})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminTempTestItemMamageScore', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-temp-test-item-manage/score.html'
        }
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pAdminTempTestItemMamage', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'admin-temp-test-item-manage/test.html',
            controller: 'pAdminTempTestItemMamageCtrl'
        }
    });
    app.controller('pAdminTempTestItemMamageCtrl', function($scope) {
        $scope.datas = [{
            name: '2017第一季度考核',
            content: '2017第一季度考核2017第一季度考核',
            factor: 0.1
        }, {
            name: '2016第四季度考核',
            content: '2016第四季度考核2016第四季度考核2016第四季度考核',
            factor: 0.1
        }, {
            name: '2016年度考核',
            content: '2016年度考核2016年度考核2016年度考核2016年度考核2016年度考核',
            factor: 0.1
        }, {
            name: '业务分析',
            content: '业务分析业务分析',
            factor: 0.2
        }, {
            name: '理论考试',
            content: '理论考试理论考试理论考试',
            factor: 0.2
        }, {
            name: '两学一做',
            content: '学习共产党党章党规，学习贯彻习近平总书记系列重要讲话精神，做合格党员',
            factor: 0.3
        }];
    });
})();
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
                department: '中书省'
            }, {
                account: 'lishanchang',
                username: '李善长',
                mobile: '123456789103',
                email: 'lishanchang@gmail.com',
                job: '左丞相',
                role: '考核小组',
                department: '中书省'
            }, {
                account: 'changyuchun',
                username: '常遇春',
                mobile: '123456789104',
                email: 'changyuchun@gmail.com',
                job: '中书平章军国重事',
                role: '普通用户',
                department: '兵部'
            }, {
                account: 'liubowen',
                username: '刘伯温',
                mobile: '123456789105',
                email: 'liubowen@gmail.com',
                job: '诚意伯',
                role: '领导干部',
                department: '吏部'
            }
        ]
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pFrontAppeal', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-appeal/list.html',
            controller: 'pFrontAppealCtrl'
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
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pFrontScore', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-score/list.html',
            controller: 'pFrontScoreCtrl'
        }
    });
    app.controller('pFrontScoreCtrl', function($scope) {
        $scope.datas = [{
            username: '朱元璋',
            score: '99'
        }, {
            username: '徐达'
        }, {
            username: '李善长',
            score: '90'
        }, {
            username: '常遇春'
        }, {
            username: '刘伯温',
            score: '89'
        }]
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pFrontScoreUser', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-score-user/user.html',
            controller: 'pFrontScoreUserCtrl'
        }
    });
    app.controller('pFrontScoreUserCtrl', function($scope) {
        $scope.datas = [{
            name: '德',
            items: {
                '尊重领导': 100,
                '顾全大局': 100,
                '团结协作': 100,
                '廉洁自律': 100
            }
        }, {
            name: '能',
            items: {
                '学习法律法规': 100,
                '学习方针政策': 100,
                '学习专业知识': 100,
                '学习为人之道': 100
            }
        }, {
            name: '勤',
            items: {
                '勤奋工作': 100,
                '勤俭节约': 100
            }
        }, {
            name: '绩',
            items: {
                '成果': 100,
                '业绩': 100
            }
        }, {
            name: '廉',
            items: {
                '廉洁奉公': 100,
                '严格自律': 100
            }
        }];
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pFrontUser', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-user/user.html'
        }
    });
    app.directive('pFrontUserBasicScore', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-user/basic-score.html',
            scope: {},
            controller: 'pFrontUserBasicScoreCtrl'
        }
    });
    app.directive('pFrontUserTempScore', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'front-user/temp-score.html',
            scope: {},
            controller: 'pFrontUserTempScoreCtrl'
        }
    });
    app.controller('pFrontUserBasicScoreCtrl', function($scope) {
        $scope.datas = [{
            name: '德',
            items: [{
                name: '尊重领导',
                score: 100
            }, {
                name: '顾全大局',
                score: 100
            }, {
                name: '团结协作',
                score: 100
            }, {
                name: '廉洁自律',
                score: 100
            }]
        }, {
            name: '能',
            items: [{
                name: '学习法律法规',
                score: 100
            }, {
                name: '学习方针政策',
                score: 100
            }, {
                name: '学习专业知识',
                score: 100
            }, {
                name: '学习为人之道',
                score: 100
            }]
        }, {
            name: '勤',
            items: [{
                name: '勤奋工作',
                score: 100
            }, {
                name: '勤俭节约',
                score: 100
            }]
        }, {
            name: '绩',
            items: [{
                name: '成果',
                score: 100
            }, {
                name: '业绩',
                score: 100
            }]
        }, {
            name: '廉',
            items: [{
                name: '廉洁奉公',
                score: 100
            }, {
                name: '严格自律',
                score: 100
            }]
        }];
    });
    app.controller('pFrontUserTempScoreCtrl', function($scope) {
        $scope.datas = [{
            name: '2017第一季度考核',
            score: 100
        }, {
            name: '2016第四季度考核',
            score: 100
        }, {
            name: '2016年度考核',
            score: 100
        }, {
            name: '业务分析',
            score: 100
        }, {
            name: '理论考试',
            score: 100
        }, {
            name: '两学一做',
            score: 100
        }];
    });
})();
(function() {
    var app = angular.module('ppees.plugins');
    app.directive('pLogin', function(config) {
        var home = config.plugins;
        return {
            restrict: 'AE',
            templateUrl: home + 'login/login.html'
        }
    });
})();
(function() {
    var app = angular.module('ppees.utils');
    app.directive('pBreadcrumb', function(config) {
        var home = config.utils;
        return {
            restrict: 'AE',
            templateUrl: home + 'breadcrumb/breadcrumb.html'
        }
    });
})();
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