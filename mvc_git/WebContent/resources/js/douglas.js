var context = '';
function getContext(){
	return this.context
}
function setContext(context){
	this.context = context;
}
function init(context){
	var bt_bom = document.querySelector('#bom');
	var bt_dom = document.querySelector('#dom');
	var bt_kaup = document.querySelector('#kaup');
	
	console.log('CONTEXT : '+context);
	this.setContext(context);
	console.log('CONTEXT : '+getContext());
	
	bt_bom.addEventListener('click',bom_go,false);
	bt_dom.addEventListener('click',dom_go,false);
	bt_kaup.addEventListener('click',kaup_go,false);
	
	/*var bt = document.getElementById('bt');
	bt.addEventListener('click',kaup,false);*/
}
function bom_go(){
	location.href = getContext()+'/douglas.do?page=bom';
}
function dom_go(){
	location.href = getContext()+'/douglas.do?page=dom';
}
/*kaup*/
function kaup_init(){
	alert('카우푸 이닛 호출');
	var bt_kaup_calc = document.querySelector('#bt_kaup_calc');
	bt_kaup_calc.addEventListener('click',kaup_calc,false);
}
function kaup_go(){
	location.href = getContext()+'/douglas.do?page=kaup';
}
function kaup_calc(){
	alert('카우푸 칼크 클릭');
	var name = document.querySelector('#name').value;
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	console.log('name'+name);
	console.log('height'+height);
	console.log('weight'+weight);
	var result = '';
	var kaup = weight / (height/100) / (height/100);
	if (kaup < 18.5) {
		result = "저체중";
	} else if(kaup >= 18.5 && kaup <= 22.9){
		result = "정상체중";
	} else if(kaup >= 23.0 && kaup <= 24.9){
		result = "위험체중";
	} else if(kaup >= 25.0 && kaup <= 29.9){
		result = "비만 1단계";
	} else if(kaup > 30 && kaup < 40){
		result = "비만 2단계";
	} else if(kaup >= 40.0){
		result = "비만 3단계";
	}
	document.getElementById('result').innerHTML=name+'의 카우푸 결과 :'+result;
	/*return name+"은 BMI지수는"+String.format("%.2f", kaup)+"이고"+result+"이다";*/
}