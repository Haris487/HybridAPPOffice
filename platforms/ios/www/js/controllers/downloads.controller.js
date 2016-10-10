/**
 * Created by muhammad haris on 10/7/16.
 */

(function () {
  angular.module('psqca')
    .controller('downloadsController', downloadCtrl);
  aboutCtrl.$inject = ['$scope', '$state'];

  function downloadCtrl($scope, $state)
  {
    $scope.itemsn = [
      {id:0, name: 'PSQCA Wallpaper I' , url : 'Download 3-2011/psqca Wall Paper.jpg'},
      {id:1, name: 'PSQCA Wallpaper II' , url : 'Download 3-2011/psqca logo.jpg'},
      {id:0, name: 'PSQCA Wallpaper I' , url : 'Download 3-2011/AMENDMENT_INCORPORATION_IN_Revision_of_MArking Fee Notification [Amended upto Nov 2010].pdf'},
      {id:0, name: 'Application form for Certification Marks Licence' , url : 'Download 3-2011/psqca Wall Paper.jpg'},
      {id:0, name: 'Application for grant of licence ' , url : 'Download 3-2011/Form I.pdf'},
      {id:0, name: '>Self evaluation-cum-declaration for licence' , url : 'Download 3-2011/Form II.pdf'},
      {id:0, name: 'Application for renewal of licence' , url : 'Download 3-2011/Form IV.pdf'},
      {id:0, name: 'SROs and Gazette Notifications' , url : 'PSQCA-SRO.pdf'},
      {id:0, name: 'Application Form for Registration of Inspection Agency' , url : 'PSQCA-App-form-inspec-agencies.pdf'},
      {id:0, name: 'Documents Required' , url : '../test2/Download/2016/June/Import export/DOCUMENTS_REQUIRED.doc'},
      {id:0, name: 'Complete Information of Consignee' , url : '../test2/Download/2016/June/Import export/complete_information_of_consignee.doc'}


    ];


  }

})();


