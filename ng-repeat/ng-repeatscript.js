var myApp = angular.module("myModule",[]);
var controller = myApp.controller("myController",function($scope){
	var employees = [
		{firstname: "Ben", lastname:"hastings",gender:"male",salary:55000},
		{firstname: "Bennhe", lastname:"ha",gender:"male",salary:5500},
		{firstname: "harry", lastname:"qeen",gender:"female",salary:500},
		{firstname: "qwert", lastname:"hats",gender:"female",salary:34000}
	];
	$scope.employees = employees;
});

var controller = myApp.controller("myController1",function($scope){
	var countries = [
		{
			name:"UK",
			cities:[
				{name: "London"},
				{name: "Manchester"},
				{name: "Brimingham"}
				]
		},
		{
			name:"USA",
			cities:[
				{name: "LosAngles"},
				{name: "Chicago"},
				{name: "huston"}
				]
		},
		{
			name:"INDIA",
			cities:[
				{name: "BAngalore"},
				{name: "Delhi"},
				{name: "Mysore"}
				]
		}
		];

		$scope.countries = countries;
});