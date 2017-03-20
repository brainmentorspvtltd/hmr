function addition(){
var sum = 0;
for(var i = 0 ; i<arguments.length; i++){
if(typeof arguments[i]=="function"){
arguments[i] = arguments[i]();
}
 sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
}
	return sum;
		//alert("Sum is "+sum);
//return sum;
}

function takeValue(){
	var firstNumber= document.getElementById("firstnumber").value;
	var secondNumber = document.getElementById("secondnumber").value;
	var thirdNumber = document.getElementById("thirdnumber").value;
	var result = addition(firstNumber,secondNumber,thirdNumber);
	document.getElementById("output").innerHTML = result;
}



