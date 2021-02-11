var current_value = 0;
var history_value = 0;
var elem_num = 0;

var oper_type = 0;

var first_num=0;
var	second_num=0;
var result = 0;



let current_array = [];
let history_array = [];

function get_value(elem_num){
			current_array.push(elem_num);
			//history_array.push(elem_num);
			current_value = current_array.join('');
			document.getElementById("input_area").innerHTML = current_value;
			//document.getElementById("history").innerHTML = history_value;
}

function del_symbol(){
		if(current_array.length > 1){
			current_array.pop();
			current_value = current_array.join('');
			document.getElementById("input_area").innerHTML = current_value;
		}
		else {
			current_value = 0;
			current_array = [];
			document.getElementById("input_area").innerHTML = current_value;
		}
}

function f_operation(symbol_type){
	history_array.push(current_value);
	//history_array.pop();
	switch(symbol_type){
		case '+':
			history_array.push('+');
			//alert('Ahtung!!!!')
		break;
		
		case '-':
			history_array.push('-');
		break;
		
		case '/':
			history_array.push('/');
		break;
		
		case '*':
			history_array.push('*');
		break;
	//default: current_array.pop();

	
}
	history_value = history_array.join('');
	current_array = [];
	document.getElementById("input_area").innerHTML = 0;
	document.getElementById("history").innerHTML = history_value;
	//current_value = 0;
}


function f_result(){
	if(current_value != 0){	
		history_array.push(current_value);
		//history_array.push('=');
		history_value = history_array.join('');
		current_array = [];
		result=eval(history_value);
		//current_value=result;
	}
	document.getElementById("input_area").innerHTML = result;
	document.getElementById("history").innerHTML = history_value;
}


