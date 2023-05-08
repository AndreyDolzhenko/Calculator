// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
let buttons_form=document.getElementById('calculator_base_left'); // ищем блок с цифрами	
let input_txt=document.getElementById('visual_txt'); // ищем поле для ввода данных
let itog_data=''; // значение, введенное в калькулятор
let operation='+'; // индетификатор введенной операции
let visual_func=document.getElementById('visual_func');
visual_func.innerHTML=`'${operation}'`;
let dataProcessing={
	'+' : 0,
	'-' : 0,
	'*' : 1,
	'/' : 1,
	'square' : 0,
	'Equals': function (){
		let number=0
		number+=this['+'];
		number-=this['-'];
		number=number*this['*'];
		number=number/this['/'];
		if(number>=0){
			this['+'] = Math.abs(number);
			this['-'] = 0;
			this['*'] = 1;
			this['/'] = 1;
			this['square'] = 0;
			operation=='square'?(this['+']=Math.sqrt(this['+']))&&(number=this['+']):this['+'];
		}
		else{
			this['+'] = 0;
			this['-'] = Math.abs(number);
			this['*'] = 1;
			this['/'] = 1;
			this['square'] = 0;
			operation=='square'?(this['-']=Math.sqrt(this['-']))&&(number=-1*this['-']):this['-'];
		}
		String(number).length>9?input_txt.style='font-size: 50px;':input_txt.style='font-size: 70px;';
		if(String(number).length>9){
			input_txt.innerHTML=`${String(number).slice(0,9)}e${number.toFixed().length-9}`;
		}		
		else{
			input_txt.innerHTML=number;
		}				
		console.log('number '+number);
		return number;		
	},
};
// ФУНКЦИЯ СОЗДАЕТ ФОРМУ КАЛЬКУЛЯТОРА
function creating_a_calculator(){
	input_txt.innerHTML+='0';
	for(let i=9; i>=-2; i--){
		let input_buttons=document.createElement('div');
		input_buttons.classList.add('input_buttons');			
		if(i==-2){
			input_buttons.innerHTML=`<p value='.'>.</p>`;
			input_buttons.id=i;
		}
		else if(i==-1){
			input_buttons.innerHTML=`<p value='00'>00</p>`;
			input_buttons.id=i;
		}
		else{
			input_buttons.innerHTML=`<p value=${i}>${i}</p>`;
			input_buttons.id=i;
		}
	buttons_form.append(input_buttons);	
	}
}
// ФУНКЦИЯ ПРИВЯЗЫВАЕТ ОНКЛИК К КНОПКАМ С ЦИФРАМИ
function calculatorUpdate(){	
	itog_data='';
	let data;
	for(let i=9; i>=-2; i--){				
		if(i==-2){	
			data=document.getElementById(i);		
			data.onclick=()=>{											
				itog_data.length==12?itog_data=itog_data:itog_data+='.';	
				itog_data.length>9?input_txt.style='font-size: 50px;':input_txt.style='font-size: 70px;';		
				input_txt.innerHTML=itog_data;
				console.log(itog_data);
			};
		}
		else if(i==-1){		
			data=document.getElementById(i);	
			data.onclick=()=>{	
				//itog_data.length==12?itog_data=itog_data:itog_data+='00';
				itog_data+='00';
				itog_data.length>9?input_txt.style='font-size: 50px;':input_txt.style='font-size: 70px;';						
				itog_data.length>12?input_txt.innerHTML=itog_data.slice(0,10)+'...':input_txt.innerHTML=itog_data;
				//input_txt.innerHTML=itog_data;
				console.log(itog_data);
			};
		}
		else{		
			data=document.getElementById(i);
			data.onclick=()=>{				
				//itog_data.length==12?itog_data=itog_data:itog_data+=i;
				itog_data+=i;
				itog_data.length>9?input_txt.style='font-size: 50px;':input_txt.style='font-size: 70px;';	
				//itog_data.length>3?itog_data=itog_data.slice(0, itog_data.length-3)+' '+itog_data.slice(-3):itog_data;		
				//input_txt.innerHTML=itog_data;
				itog_data.length>12?input_txt.innerHTML=itog_data.slice(0,10)+'...':input_txt.innerHTML=itog_data;
				console.log(itog_data);
			};
		}
	}
	console.log(itog_data);
	return itog_data;
}
// ФУНКЦИЯ ОБРАБОТКИ ОПЕРАЦИИ
function Switch(operation){
	switch(operation){
	case '+': dataProcessing['+']+=Math.abs(itog_data);
	break;
	case '-': dataProcessing['-']+=Math.abs(itog_data);
	break;
	case '*': dataProcessing['*']=Math.abs(itog_data);
	break;	
	case '/': dataProcessing['/']=Math.abs(itog_data);
	break;	
	default: break;
}
};

creating_a_calculator(); // создаем форму калькулятора
calculatorUpdate(); // привязываем действие к кнопкам с цифрами
let c=document.getElementById('C');
c.onclick=()=>{
	input_txt.style='font-size: 70px;';
	input_txt.innerHTML='0'; 
	calculatorUpdate(); 
	dataProcessing={
		'+' : 0,
		'-' : 0,
		'*' : 1,
		'/' : 1,
		'square' : 0,
		'Equals': function (){
			let number=0
			number+=this['+'];
			number-=this['-'];
			number=number*this['*'];
			number=number/this['/'];
			if(number>=0){
				this['+'] = Math.abs(number);
				this['-'] = 0;
				this['*'] = 1;
				this['/'] = 1;
				this['square'] = 0;
				operation=='square'?(this['+']=Math.sqrt(this['+']))&&(number=this['+']):this['+'];
			}
			else{
				this['+'] = 0;
				this['-'] = Math.abs(number);
				this['*'] = 1;
				this['/'] = 1;
				this['square'] = 0;
				operation=='square'?(this['-']=Math.sqrt(this['-']))&&(number=-1*this['-']):this['-'];
			}
			String(number).length>9?input_txt.style='font-size: 50px;':input_txt.style='font-size: 70px;';
			if(String(number).length>9){
				input_txt.innerHTML=`${String(number).slice(0,9)}e${number.toFixed().length-9}`;
			}		
			else{
				input_txt.innerHTML=number;
			}				
			console.log('number '+number);
			return number;		
		},
	};
	operation='+';
	visual_func.innerHTML=`'${operation}'`;
};
let arrow=document.getElementById('arrow');
arrow.onclick=()=>{itog_data=itog_data.slice(0, itog_data.length-1); input_txt.innerHTML=itog_data; console.log(itog_data);};

let plus=document.getElementById('plus');
plus.onclick=()=>{
	Switch(operation);	
	itog_data='';
	operation='+';
	visual_func.innerHTML=`'${operation}'`;
	console.log(visual_func.innerHTML);
	console.log('операция'+operation);
	console.log(dataProcessing.Equals());
	console.log(dataProcessing);
};
let minus=document.getElementById('minus');
minus.onclick=()=>{
	console.log(visual_func.innerHTML);
	Switch(operation);	
	itog_data='';
	operation='-';
	visual_func.innerHTML=`'${operation}'`;
	console.log('операция'+operation);
	console.log(dataProcessing.Equals());
	console.log(dataProcessing);
};
let multiplication=document.getElementById('multiplication');
multiplication.onclick=()=>{
	if(operation!='*'){
	console.log(visual_func.innerHTML);
	Switch(operation);	
	console.log(dataProcessing.Equals());	
	itog_data='';
	operation='*';
	visual_func.innerHTML=`'${operation}'`;
	console.log('операция'+operation);
	//console.log(dataProcessing.Equals());
	console.log(dataProcessing);
}
};
let division=document.getElementById('division');
division.onclick=()=>{	
	if(operation!='/'){
	console.log(visual_func.innerHTML);
	Switch(operation);	
	console.log(dataProcessing.Equals());	
	itog_data='';
	operation='/';
	visual_func.innerHTML=`'${operation}'`;
	console.log('операция'+operation);
	//console.log(dataProcessing.Equals());
	console.log(dataProcessing);
	}
};
let square=document.getElementById('square');
square.onclick=()=>{	
	console.log(visual_func.innerHTML);
	Switch(operation);	
	operation='square';
	console.log(dataProcessing.Equals());
	operation='+';
	itog_data='';
	
	visual_func.innerHTML=`'&#8730;'`;
	console.log('операция'+operation);
	//console.log(dataProcessing.Equals());
	console.log(dataProcessing);
};
let equals=document.getElementById('equals');
equals.onclick=()=>{	
	Switch(operation);			
	itog_data='';
	operation='+';
	console.log('операция'+operation);
	console.log(dataProcessing.Equals());
	console.log(dataProcessing);
};

/*
<div class="input_buttons" id="C"><p>С</p></div>
<div class="input_buttons" id="arrow"><p>&#8594;</p></div>
<div class="input_buttons" id="square"><p>&#8730;</p></div>
<div class="input_buttons" id="multiplication"><p>&#215;</p></div>
<div class="input_buttons" id="division"><p>&#247;</p></div>
<div class="input_buttons" id="plus"><p>+</p></div>
<div class="input_buttons" id="minus"><p>-</p></div>
<div class="input_buttons" id="equals"><p>=</p></div>
*/