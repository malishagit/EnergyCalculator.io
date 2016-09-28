/* JavaScript Document */
//enclosure of anonymous function
//this function can exist with other javascript in a page and everything in this function will defined here will declare in angular application for the html 
(function(){
	//declaring variable app to be myCalculator
	var app = angular.module('myCalculator',[]);

	app.controller('CalculatorController',['$scope',function($scope){
		$scope.lumen_options =[375,600,900,1125,1600];
		//to store first default value as well as user select in select menu
		$scope.current_lumens=600;

		$scope.current_cost=12;
		$scope.current_hours =3;
		$scope.total_days = 365;

		$scope.inc_conversion= .0625;
		$scope.hal_conversion= .0450;
		$scope.cfl_conversion= .0146;
		$scope.led_conversion= .0125;

		//if something changes then we can update our calculation with this function
		$scope.calculate = function(){
			//toFixed is javascript in built function for decimal places
			$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);
			// //if someone enter negative hours then we will reset it to 1 
			// if($scope.current_hours < 1){ $scope.current_hours = 1; }
			//if someone enter greater than 24 hours then we will reset it to 24 hours
			if($scope.current_hours > 24){ $scope.current_hours = 24; }

			var total_hours = $scope.total_days * $scope.current_hours;

			var cost = $scope.current_cost/100;

			$scope.inc_cost= ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.hal_cost= ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.cfl_cost= ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.led_cost= ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
		}
		$scope.calculate();


	}]);





})();


