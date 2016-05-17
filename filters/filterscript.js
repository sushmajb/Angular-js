var app = angular.module("myModule",[]);

var controller = app.controller("myController",function($scope){
	var employees = [
	{ name : "Ben", DOB :new Date("Nov 23, 1980"), gender: "Male", salary: 2223.56345},
	{ name : "Hen", DOB :new Date("Dec 23, 1981"), gender: "Female", salary: 2223.56},
	{ name : "Pen", DOB :new Date("Jan 23, 1984"), gender: "Female", salary: 2223.56},
	{ name : "Ken", DOB :new Date("Feb 23, 1986"), gender: "Male", salary: 2223.56}
	];

	$scope.employees = employees;
	$scope.rowLimit = 3;
});