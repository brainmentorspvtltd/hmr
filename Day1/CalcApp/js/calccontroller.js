window.addEventListener("load",bindEvents);
function bindEvents(){
	
var bt= document.getElementsByTagName("button");
Array.prototype.forEach.apply(bt,[function(currentBt){
//console.log(currentBt);
currentBt.addEventListener("click",doOperation);
}]);
	//for(var i = 0; i<bt.length; i++){
//
//	bt[i].addEventListener("click",doOperation);
//// doOperation has attach current button this
//}	
//	document.getElementById("plusBt").addEventListener("click",doOperation);
//	document.getElementById("subBt").addEventListener("click",doOperation);
	
}

function doOperation(){
var firstNo = document.getElementById("firstno").value;
	
var secondNo = document.getElementById("secondno").value;
//var operation = opr;

var operation = this.innerHTML ;
alert("FirstNo "+firstNo+" SecondNo "+secondNo);	
alert("Operation is "+operation);	
}