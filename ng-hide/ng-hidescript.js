var app = angular.module("myModule",[]);

var controller = app.controller("myController", function($scope) {
	var employees = [
	    {name:"Ben", gender:"male", salary:12344, city:"Bangalore"},
	    {name:"Sara", gender:"female", salary:144, city:"Mangalore"},
	    {name:"Mark", gender:"male", salary:1234, city:"Mysore"},
	    {name:"Pam", gender:"female", salary:2344, city:"Delhi"},
	    {name:"Todd", gender:"male", salary:234, city:"London"}
	];
	
	$scope.employees = employees; 
});
