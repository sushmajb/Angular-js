var myApp = angular.module("myModule",[]);



myApp.controller("myController",function($scope){
	var employee = {
		firstname: "David",
		lastname: "williams",
		age: "32"
	};


	$scope.emplyoee = employee;
});

myApp.controller("myController1",function($scope){
	var image = {
		countryname: "India",
		capital: "Delhi",
		flag: "/home/sushma/Pictures/Indiaflag.png"
	};

	$scope.image = image;
})