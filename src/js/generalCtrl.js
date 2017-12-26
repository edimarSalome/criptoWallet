criptoWallet.controller('generalCtrl',['$scope','$filter', '$http', 'paths', function($scope, $filter, $http, paths){
    var $ctrl = this;
    
    $ctrl.construct = function(){
        $ctrl.setLangPtBr();
        //$ctrl.setLangEnglish();
        //$ctrl.setCriptos();
        $ctrl.getCurrentPrices();
        $scope.ready=true;
    };
    
    /*-------------- API -----------------*/
    $ctrl.getCurrentPrices=function(){
        $http.get(paths.apiCriptoCompare+'pricemultifull?fsyms=XRP,BTC,IOT&tsyms=USD,BRL').then(function(response) {
            $ctrl.setCriptos(response.data.RAW);
        });
    };
    
    /* ------------- Business model ------*/
    $ctrl.setCriptos = function(data){        
        $scope.criptos = [
            {name:'Bitcoin', symbol:'', alias:'BTC', marketDataBRL: data.BTC.BRL, marketDataUSD: data.BTC.USD},
            {name:'Ripple', symbol:'', alias:'XRP', marketDataBRL: data.XRP.BRL, marketDataUSD: data.XRP.USD},
            {name:'IOTA', symbol:'', alias:'IOT', marketDataBRL: data.IOT.BRL, marketDataUSD: data.IOT.USD}
        ];
        
        $scope.charged=true;
    };
    
    /* ------------- View ---------------*/
    $ctrl.setLangEnglish = function(){
        $scope.lang = {
            currency:'USD',
            criptoCurrency:'Currencies',
            portfolio:'My portfolio',
            portfolioMemberMsg:'Register now and have early access to <b>My Portfolio</b> mode for free.<br><br><small>Release in January/2018</small>',
            symbol:'$ ',
            register:'Register now'
        };
    };
    
    $ctrl.setLangPtBr = function(){
        $scope.lang = {
            currency:'BRL',
            criptoCurrency:'Criptomoedas',
            portfolio:'Meu portifólio',
            portfolioMemberMsg:'Cadastre-se e tenha acesso grátis ao modo <b>Meu Portifólio</b>.<br><br><small>Disponível em Janeiro/2018</small>',
            symbol:'R$ ',
            register:'Cadastrar agora'
        };
    };
    /*
    $ctrl.setCriptos = function(){
        $scope.criptos = [
            {name:'Bitcoin', symbol:'', alias:'BTC', prices:[{exchange:'Foxbit', high:67000, low:64000, current:65000}]},
            {name:'Ripple', symbol:'', alias:'XRP', prices:[{exchange:'BitFinex', high:20, low:16, current:19}]},
            {name:'IOTA', symbol:'', alias:'IOT', prices:[{exchange:'Rippex', high:3, low:64000, current:65000}]}
        ];
    };*/
    
    $scope.getPriceByCripto = function(cripto){return $scope.lang.currency==='USD'?$filter('currency')(cripto.marketDataUSD.PRICE, $scope.lang.symbol, 2):$filter('currency')(cripto.marketDataBRL.PRICE, $scope.lang.symbol, 2);};
    $scope.getExchangeByCripto = function(cripto){return $scope.lang.currency==='USD'?cripto.marketDataUSD.LASTMARKET:cripto.marketDataBRL.LASTMARKET;};
    $scope.getDailyAmount = function(cripto){return '+15%';};
    
    $ctrl.construct();
}]);