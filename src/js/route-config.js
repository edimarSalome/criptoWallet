criptoWallet.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider/*
                .when('/agenda', {
                    templateUrl: 'views/agenda_web/agenda_web.html',
                    controller: 'agendaCtrl',
                    controllerAs: '$ctrl'
                })
                .when('/login', {
                    templateUrl: 'views/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: '$ctrl'
                })*/
                .when('/general', {
                    templateUrl: 'app/index.html',
                    controller: 'generalCtrl',
                    controllerAs: '$ctrl'
                })
                .otherwise({
                    redirectTo: '/general'
                });
    }]);