(function () {
   var orderController=function ($scope,$routeParams,customerFactory) {
       var customerId=$routeParams.customerId;
       $scope.customer=null;

       function init() {
           customerFactory.getCustomersWithId(customerId)
               .success(function (customer) {
                   $scope.customer=customer;
                   })
               .error(function (data,status,headers,config) {

               });

       }
      init();
   } ;
   orderController.$inject=['$scope','$routeParams','customerFactory'];
   angular.module('customerApp')
       .controller('orderController',orderController)
}());