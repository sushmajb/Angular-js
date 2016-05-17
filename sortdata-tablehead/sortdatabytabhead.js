
var app = angular.module("myModule",[]);

var controller = app.controller("myController",function($scope){
	var employees = [
{name : "Ben" , DOB : new Date ("july 15, 1989"), gender : "female", salary : 12345},
{name : "Hen" , DOB : new Date ("Aug 15, 1989"), gender : "male", salary : 145},
{name : "Ken" , DOB : new Date ("sep 15, 1989"), gender : "female", salary : 2345},
{name : "Pen" , DOB : new Date ("dec 15, 1989"), gender : "male", salary : 1234}
];

	$scope.employees = employees;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	
	$scope.sortData = function(column){
	$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
	$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column){
		var className = '';
		if($scope.sortColumn === column){
			className = $scope.reverseSort === true ? 'arrow-down' : 'arrow-up';
		}
		return className;
	}
});
