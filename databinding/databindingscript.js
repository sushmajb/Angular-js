var myApp = angular.module("myModule",[]);

var controller = myApp.controller("myController",function($scope){
	var emplyoee ={
		name:"Sushma",
		age:32,
		gender:"female"
	};

	$scope.emplyoee= emplyoee;
});