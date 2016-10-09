(function () {
  angular.module('psqca')
    .controller('AlertsController', alertsCtrl);
  alertsCtrl.$inject = ['$scope', '$state'];

  function alertsCtrl($scope, $state) {
    // Alerts Controller
    $scope.alertsn = [
      {id : 0,article: "Upgradation of product Conffirmity Assesment Center at SDC, Karachi." , limit : 100},
      {id : 1, article: "Pakistan standards and quality control authority has launches a new TV comercial",  limit : 100},
      {id :  2,article: "PSQCA being a National Standards day actively celebrating the world Standard Day on 14th day of October in Pakistan" , limit : 100}
    ];
    //
    // ///////// These Lines to be in a functions to be load when pages load
    $scope.clickLearnMore = function(id) {
      for(var i =0 ; i < $scope.alertsn.length ; i++){
        if($scope.alertsn[i].id == id){
          if($scope.alertsn[i].limit == 100){
            $scope.alertsn[i].limit = 1000;
          }
          else{
            $scope.alertsn[i].limit = 100;
          }
        }
      }
    }
  }
})();
