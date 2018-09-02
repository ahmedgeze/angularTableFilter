(function () {
   var app=angular.module('customerApp',['ngRoute']);

   app.config(function ($routeProvider) {
      $routeProvider
          .when('/',{
              controller:'customerController',
              templateUrl:'app/views/customer.html'
          })
          .when('/orders/:customerId',{
              controller:'orderController',
              templateUrl:'app/views/order.html'

          })
          .otherwise({ redirectTo: '/' });
   });

}());