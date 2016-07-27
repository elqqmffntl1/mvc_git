<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="member.MemberService" %>
    <%@ page import="member.MemberServiceImpl" %>
    <%@ page import="member.MemberBean" %>   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>탈퇴</title>
<link rel="stylesheet" href="${css}/member.css" />
</head>
<body>
<div class="box">
<%
	MemberService service = MemberServiceImpl.getInstance();
	MemberBean member = new MemberBean();
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String result = request.getParameter("result");
	if(pw.equals(result)){
	member.setId(id);
	member.setPw(pw);
	service.delete(member);
	%>
	<h1>탈 퇴 완 료.</h1><br/>
	<a href="${context}/index.jsp"><img src="${img}/home.jpg" alt="home" style="width: 30px" /></a>
	<%
	}else{%>
	<h1>패스 워드를 확인하세요.</h1>	
	<a href="${context}/member/service/delete.jsp">다시 탈퇴해</a>
	<%}
%>
</div>
</body>
</html>