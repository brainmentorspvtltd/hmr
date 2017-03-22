/*
$http is predefine service , and it used to commnicate with
web service (It is hosted on Some Server)
$q it is a predefine service and this is used to get the promise
*/
app.factory("shopfactory",function($http,$q){
	var object = {};
	// here we define a callserver function in object
	object.callServer=function(){
		var defered = $q.defer();
	
		$http.get("https://raw.githubusercontent.com/brainmentorspvtltd/hmr/master/mobile.json").then(success,fail);
		function success(data){
			defered.resolve(data);
		}
		function fail(error){
			defered.reject(error);
		}
		return defered.promise;
	}
	return object;
})