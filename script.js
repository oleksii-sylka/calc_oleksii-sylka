var current_value = 0;
var history_value = 0;
var result = 0;

var btn_visibility = false;

let current_array = [];
let history_array = [];

function get_value(elem_num){
		
		//if(current_array[0] !=0){
			current_array.push(elem_num);
			
			current_value = current_array.join('');
			document.getElementById("input_area").innerHTML = current_value;
			
		//}
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
	
	if (current_value !=0){
		history_array.push(current_value);
	}


	if (history_array[history_array.length-1] == '+' || history_array[history_array.length-1] == '-' || history_array[history_array.length-1] == '/' || history_array[history_array.length-1] == '*') {
		history_array.pop();
	}

		switch(symbol_type){
			case '+':
				if (history_array[history_array.length-1] != '+') {
					history_array.push('+');
				}
			break;
		
		case '-':
			if (history_array[history_array.length-1] != '-') {
				history_array.push('-');
			}
		break;
		
		case '/':
			if (history_array[history_array.length-1] != '/') {
				history_array.push('/');
			}
		break;
		
		case '*':
			if (history_array[history_array.length-1] != '*') {
				history_array.push('*');
			}
		break;
	
}

	history_value = history_array.join('');
	current_array = [];
	document.getElementById("input_area").innerHTML = 0;
	document.getElementById("history").innerHTML = history_value;
	current_value = 0;

}


function f_result(){
	if(current_value != 0){	
		history_array.push(current_value);//????????????????? переделать!
		history_value = history_array.join('');
		current_array = [];
		result=eval(history_value);
		history_array.push('=',result);

	}
	
	document.getElementById("input_area").innerHTML = result;
	document.getElementById("history").innerHTML = history_array.join('');
	
	//history_array=[];
}

function f_more_btn(){
	if (btn_visibility==false){
		for(i=0; i<4; i++){
			document.getElementsByClassName("additional_button")[i].style.visibility = "visible";
		}
		btn_visibility=true;
	}
	else {
		for(i=0; i<4; i++){
			document.getElementsByClassName("additional_button")[i].style.visibility = "hidden";
		}
		btn_visibility=false;
	}
	
}


function f_percent(){
	history_value=history_array[history_array.length-2];
	result=current_value*(history_value/100);
	history_array.push(current_value,'%=',result);
	history_value=history_array.join('');
    alert(history_array);
	document.getElementById("input_area").innerHTML = result;
	document.getElementById("history").innerHTML = history_value;
}

function f_math(oper_type){
	switch(oper_type){
			case 'tan':
				result=Math.tan(current_value);
			break;
			case 'sin':
				result=Math.sin(current_value);
			break;
			case 'cos':
				result=Math.cos(current_value);
			break;
			case 'sqrt':
				result=Math.sqrt(current_value);
			break;
	}
	document.getElementById("input_area").innerHTML = result;
}