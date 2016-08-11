var move = function(context,page){
	location.href=context+'/douglas.do?page='+page;
}
var douglas = (function(){
	var context = sessionStorage.getItem('context');
		return {
			init : function(){
				document.querySelector('#bt_bom').addEventListener('click',function(){move(context,'bom');},false);
				document.querySelector('#bt_dom').addEventListener('click',function(){move(context,'dom');},false);
				document.querySelector('#bt_kaup').addEventListener('click',function(){move(context,'kaup');},false);
				document.querySelector('#bt_account').addEventListener('click',function(){move(context,'account');},false);
			}
		};
})();
var account = (function(){
	var _account_no = 0,_money=0;
		return {
			init :function() {
				document.querySelector('#bt_spec_show').addEventListener('click',member.spec,false);
				document.querySelector('#bt_make_account').addEventListener('click',this.spec,false);
				document.querySelector('#bt_deposit').addEventListener('click',this.deposit,false);
				document.querySelector('#bt_withdraw').addEventListener('click',this.withdraw,false);
			} ,
			spec : function() {
				this.account.account_no = Math.floor(Math.random() * 899999) + 100000;
				document.querySelector('#result_account').innerHTML=this.account_no;
			},
			deposit : function(){
				var deposit = document.querySelector('#money').value;
				document.querySelector('#rest_money').innerHTML= deposit;
			},
			withdraw :function(){
				var withdraw = document.querySelector('#money').value; 
				document.querySelector('#rest_money').innerHTML='-'+withdraw;
			}
		};
})();
var member = (function() {
	var _ssn,_name,_gender,_age;
	return {
		spec : function(){
			_ssn=document.querySelector('#ssn').value;
			_name=document.querySelector('#name').value;
			var now = new Date().getFullYear();
			var ssnArr = _ssn.split("-");
			var ageResult1 = ssnArr[0];
			var genderResult = Number(ssnArr[1]);
			var ageResult0 = 0;
			switch (genderResult) {
			case 1: case 5: 
				_gender="남"; 
				ageResult0 = now - 1900-(ageResult1/10000);
				_age = ageResult0.toString().split(".")[0];
				break;
			case 3: case 7:
				_gender="남"; 
				ageResult0 = now - 2000-(ageResult1/10000);
				_age = ageResult0.toString().split(".")[0];
				break;
			case 2: case 6:
				_gender="여";
				ageResult0 = now - 1900-(ageResult1/10000);
				_age = ageResult0.toString().split(".")[0];
				break;
			case 4: case 8:
				_gender="여";
				ageResult0 = now - 2000-(ageResult1/10000);
				_age = ageResult0.toString().split(".")[0];
				break;

		}	
			document.querySelector('#result_name').innerHTML = _name;
			document.querySelector('#result_age').innerHTML = _age;
			document.querySelector('#result_gender').innerHTML = _gender;
			
		}
	}
})();
var kaup = (function() {
	return{
		init : function() {
			document.querySelector('#bt_kaup_calc').addEventListener('click',this.calc,false);
		},
		calc : function(){
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
	}
})();
/*kaup*/



/*account*/