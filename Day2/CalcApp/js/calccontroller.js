window.addEventListener("load",bindEvents);
function bindEvents(){
	
//var bt= document.getElementsByTagName("button");
var bt = document.getElementsByClassName("opr");
	Array.prototype.forEach.apply(bt,[function(currentBt){
	currentBt.addEventListener("click",doOperation);
}]);
document.getElementById("cls").addEventListener("click",clearContent);	
	//for(var i = 0; i<bt.length; i++){
//
	//bt[i].addEventListener("click",doOperation);
//// doOperation has attach current button this
//}	
//	document.getElementById("plusBt").addEventListener("click",doOperation);
//	document.getElementById("subBt").addEventListener("click",doOperation);
	
}

function clearContent(){
	document.getElementById("firstno").value="";
	document.getElementById("secondno").value="";
	document.getElementById("result").innerHTML="";
	document.getElementById("firstno").focus();
	
	
}

function doOperation(){
var result = 0;	
var firstNo = document.getElementById("firstno").value;
	
var secondNo = document.getElementById("secondno").value;
//var operation = opr;

var operation = this.innerHTML ;
	result = evaluate(firstNo,secondNo,operation);
//	if(operation =='+'){
//		result = add(firstNo,secondNo);
//	}
//	else
//	if(operation =='-'){
//		result = subtract(firstNo,secondNo);
//	}
//	else
//	if(operation =='*'){
//		result = multiply(firstNo,secondNo);
//	}
//	else
//	if(operation =='/'){
//		result = divide(firstNo,secondNo);
//	}
	document.getElementById("result").innerHTML = result;
//alert("FirstNo "+firstNo+" SecondNo "+secondNo);	
//alert("Operation is "+operation);	
}