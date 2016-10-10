(function () {
  angular.module('psqca')
    .controller('QRController', qrCtrl);
  qrCtrl.$inject = ['$scope', '$state'];

  function qrCtrl($scope, $state) {
   /* $scope.takePicture = function (options) {

      var options = {
        quality : 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
        $scope.picture = imageData;;
      }, function(err) {
        console.log(err);
      });

    };*/
  }
})();
