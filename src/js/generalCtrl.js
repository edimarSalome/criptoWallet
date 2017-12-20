criptoWallet.controller('generalCtrl',['$scope','$filter', function($scope, $filter){
    var $ctrl = this;
    
    $ctrl.construct = function(){
        $ctrl.setLangEnglish();
        $ctrl.setCriptos();
        $ctrl.getCurrentPrices();
        $scope.ready=true;
    };
    
    $ctrl.setLangEnglish = function(){
        $scope.lang = {
            currency:'Currencies',
            portfolio:'My portfolio',
            portfolioMemberMsg:'Register now and have early access to <b>My Portfolio</b> mode for free.<br><br><small>Ready in January/2018</small>',
            symbol:'$ '
        };
    };
    
    $ctrl.setCriptos = function(){
        $scope.criptos = [
            {name:'Bitcoin', symbol:'', alias:'BTC', prices:[{exchange:'Foxbit', high:67000, low:64000, current:65000}]},
            {name:'Ripple', symbol:'', alias:'XRP', prices:[{exchange:'BitFinex', high:20, low:16, current:19}]},
            {name:'IOTA', symbol:'', alias:'IOT', prices:[{exchange:'Rippex', high:3, low:64000, current:65000}]}
        ];
    };
    
    $ctrl.getCurrentPrices=function(){
        $scope.charged=true;
    };
    
    $scope.getPriceByCripto = function(cripto){return $filter('currency')(cripto.prices[0].current, $scope.lang.symbol, 2);};
    $scope.getDailyAmount = function(cripto){return '+15%';};
    
    $ctrl.construct();
}]);