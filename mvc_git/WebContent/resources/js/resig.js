var grade = (function(){
	return {
		init : function(){
			$(function() {
				$('#grade_content').addClass('box');
				$('#img_home').css('width','30px');
				$('#grade_content > article')
					.css('width','300px')
					.css('text-align','left')
					.css('margin','0 auto');
				$('#title').css('font-size','40px');
				$('#a_regist').click(function() {
					location.href = "${context}/grade.do?page=regist";
				});
				$('#a_update').click(function() {
					location.href = "${context}/grade.do?page=update";
				});
				$('#a_delete').click(function() {
					location.href = "${context}/grade.do?page=delete";
				});
				$('#a_list').click(function() {
					location.href = "${context}/grade.do?page=list";
				});
				$('#a_count').click(function() {
					location.href = "${context}/grade.do?page=count";
				});
				$('#a_find').click(function() {
					location.href = "${context}/grade.do?page=search";
				});
			});
		}
	};
})();
