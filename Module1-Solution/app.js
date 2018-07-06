(function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject= ['$scope'];
	function LunchCheckController($scope) {
		// $scope.message ='Enter your Lunch items separated by a comma';
		$scope.changeMessage = function(){
			$scope.message = food($scope.placeHolder);
		};
	};

	function food(itemsList){
		var numberOfItems = itemsList.split(',').length;
		var message = "";
		if (itemsList == ""){
			message ="You need to enter items you ate before clicking the button";
		}
		else if(numberOfItems >= 1 && numberOfItems <=3){
			message ="Enjoy!";
		}
		else{
			message = "Too much!";
		}
		return message;
	};


})();
