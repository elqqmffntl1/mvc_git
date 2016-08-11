// var application = (function(){})();  IIFE 패턴

var application = (function(){	
	var init = function(param) {
		sessionStorage.setItem('context', param);
	};
	var getContext = function() {
		return sessionStorage.getItem('context');
	};
	var goHome = function(){
		location.href = this.getContext()+"/home.do";
	};
	return {
		to_douglas : function() {
			location.href = getContext()+"/douglas.do";
		},
		goHome : goHome,
		getContext : getContext,
		init : init
	};
})();



