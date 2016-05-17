var app =angular.module("myModule",[])
                .filter("gender", function() {
                    return function(gender) {
                        switch(gender) {
                            case 1: return "Male";
                            case 2: return "Female";
                            case 3: return "Not Discolsed";
                        }
                    }
                });

var controller = app.controller("myController",function($scope) {
    var employees = [
        {name : "Ben",gender:1, salary:1234 },
        {name : "Sara",gender:2, salary:234 },
        {name : "Tara",gender:2, salary:21234 },
        {name : "Pam",gender:1, salary:1934 },
        {name : "Todd",gender:3, salary:1214 }
        ];
        
        $scope.employees = employees;    
    });
