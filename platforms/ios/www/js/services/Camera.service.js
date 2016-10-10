/**
 * Created by muhammmad haris on 10/7/16.
 */

(function(){

  angular.module('psqca')

    .factory('Camera', function($q) {

      return {
        getPicture: function(options) {
          var q = $q.defer();

          navigator.camera.getPicture(function(result) {
            q.resolve(result);
          }, function(err) {
            q.reject(err);
          }, options);

          return q.promise;
        }
      }

    });


})();
