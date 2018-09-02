(function () {
   var customerController=function ($scope,$log,customerFactory,appSettings) {
       $scope.sortBy='name';
       $scope.reverse=false;
       $scope.customers={};
       $scope.appSettings=appSettings;


       function init() {
           customerFactory.getCustomers()
               .success(function (customers) {
                   $scope.customers=customers;

               })
               .error(function (data,status,headers,config) {
                   $log.log(data.error+' '+status);

               })

       }
       init();

       $scope.doSort=function (propName) {
           $scope.sortBy=propName;
           $scope.reverse=!$scope.reverse;

       };


   };
    customerController.$inject=['$scope','$log','customerFactory','appSettings'];
    angular.module('customerApp').controller('customerController',customerController);

}());