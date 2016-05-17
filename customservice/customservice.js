var app = angular.module("myModule",[]);

var controller = app.controller("myController",function($scope,stringService){
   $scope.transformString = function(input) {
    $scope.output = stringService.processString(input);
   }
});
