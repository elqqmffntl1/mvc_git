<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="member.MemberService" %>
    <%@ page import="member.MemberServiceImpl" %>
    <%@ page import="member.MemberBean" %>
    <%@ page import="member.MemberDAO" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>ID로 검색하기</title>
</head>
<body>
<div class="box">
	<% 
	MemberService service = MemberServiceImpl.getInstance();
	String id = request.getParameter("id");
	service.findById(id);
	%>
	<%=service.findById(id) %>
</div>	
</body>
</html>