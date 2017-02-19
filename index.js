// define the top-level app container
myApp = angular.module("myApp", []);

// add controller, inject $scope, add a property to $scope and assign a value to it.
myApp.controller("MainController", ["$scope", "$http", function($scope,$http){

	$http({
		method: "Get",
		url: "topspots.json"
	}).then(function(response) {

		$scope.topspots = response.data;
	});
}])