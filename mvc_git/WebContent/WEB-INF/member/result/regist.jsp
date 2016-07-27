<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="member.MemberService" %>
    <%@ page import="member.MemberServiceImpl" %>
    <%@ page import="member.MemberBean" %>
    <%@ page import="member.MemberDAO" %>
<!doctype html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>회원가입</title>
<link rel="stylesheet" href="${css}/member.css" />
<style type="text/css">
span.meta{width: 200px;background-color: yellow;float: left; text-align: left}
div.joinDiv{border:1px dotted gray;width: 80%;margin:10px 50px 10px 50px}
</style>
</head>
<body>
<div class="box">
<%
	MemberService service = MemberServiceImpl.getInstance();
	MemberBean member = new MemberBean();
	MemberDAO dao = MemberDAO.getInstance();
	
	String name = request.getParameter("name");
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String ssn = request.getParameter("ssn");
	
	if(dao.existId(id)){%>
		<h2>회원가입 실패!!</h2>
		<a href="${context}/member/service/regist.jsp">다시 시도하기</a>
	<% 
	}else{
		member.setId(id);
		member.setName(name);
		member.setPw(pw);
		member.setSsn(ssn);
		member.setRegDate();
		service.regist(member);
		
		%><h1><%=name %> 님의 회원가입 성공을 축하드립니다.</h1><br/>
		
		<a href="${context}/member/main.jsp"><img src="${img}/member.jpg" alt="member" style="width: 30px" /></a>
		<a href="${context}/index.jsp"><img src="${img}/home.jpg" alt="home" style="width: 30px" /></a>
		<%
				
	}%>
	
	
	</div>
</body>
</html>