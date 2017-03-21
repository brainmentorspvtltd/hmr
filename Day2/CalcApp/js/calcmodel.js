// this is model and it contains only logic
//function add(x,y){
//return parseInt(x) + parseInt(y);
//}
//
//function subtract(x,y){
//return x - y;
//}
//
//function multiply(x,y){
//return x * y;
//}
//
//function divide(x,y){
//return x / y;
//}

function evaluate(firstNo, secondNo, operator){
	var expression = firstNo + operator + secondNo;
	return eval(expression);
	
	
}