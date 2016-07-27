<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="member.MemberService" %>
    <%@ page import="member.MemberServiceImpl" %>   
    <%@ page import="member.MemberBean" %> 
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>수정</title>
<link rel="stylesheet" href="${css}/member.css" />	
</head>
<body>
	<div class="box">
	<%
		MemberService service = MemberServiceImpl.getInstance();
		MemberBean member = service.findById(request.getParameter("id"));
		
		String pw = request.getParameter("pw");
		String email = request.getParameter("email");
		member.setPw(pw);
		member.setEmail(email);
		service.update(member);
		response.sendRedirect(null);
		%>
	<a href="${context}/member/member_controller.jsp"><img src="${img}/member.jpg" alt="member" style="width: 30px" /></a>
	<a href="${context}/index.jsp"><img src="${img}/home.jpg" alt="home" style="width: 30px" /></a>
	<%
%>
</div>
</body>
</html>