
/*
What is $scope
$scope is predefine object in angular 
it is a glue b/w view and controller

shopfactory - DI 
*/
app.controller("shopctrl",function($scope,shopfactory){
	
	$scope.loadMobileData=function(){
		var promise = shopfactory.callServer();
		for(var i = 1; i<=10 ;i++){
			console.log("I want to do what i want to do"+i);
		}
		promise.then(function(data){
			$scope.result = data;
		},function(error){
			$scope.error = error;
		})
	}
});