package member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import global.DispatcherServlet;
import global.ParamMap;
import global.Seperator;
import subject.SubjectBean;
import subject.SubjectMember;
import subject.SubjectService;
import subject.SubjectServiceImpl;

@WebServlet("/member.do")
public class MemberController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("member 컨트롤러 진입...");
		HttpSession session = request.getSession();
		Seperator.init(request, response);
		MemberService service = MemberServiceImpl.getInstance();
		SubjectService subjService = SubjectServiceImpl.getInstance();
		SubjectMember sm = new SubjectMember();
		MemberBean member = new MemberBean();
		SubjectBean subject = new SubjectBean();
		System.out.println("액션 ? "+Seperator.command.getAction());
		
		switch (Seperator.command.getAction()) {
		case "move":
			DispatcherServlet.send(request, response, Seperator.command);
			break;
		case "login":
			member.setId(request.getParameter("id"));
			member.setPw(request.getParameter("pw"));
			sm = service.login(member);
			if(member.getId().equals("fail")){
				System.out.println("컨트롤러 : 로그인실패");
				Seperator.command.setPage("login");
				Seperator.command.setView();
			}else{
				System.out.println("컨트롤러 : 로그인성공");
				request.setAttribute("user", sm);
				session.setAttribute("user", sm);
				Seperator.command.setDirectory("global");
				Seperator.command.setView();
			}
			DispatcherServlet.send(request, response, Seperator.command);
			break;
			case "regist":
			member.setId(request.getParameter("id"));
			member.setPw(request.getParameter("pw"));
			member.setName(request.getParameter("name"));
			member.setSsn(request.getParameter("ssn"));
			member.setRegDate();
			member.setEmail(request.getParameter("email"));
			member.setPhone(request.getParameter("phone"));
			System.out.println("전공:::"+request.getParameter("major"));
			System.out.println("수강과목:::"+ParamMap.getValues(request, "subject").toString());
			if (service.regist(member).equals("fail")) {
				Seperator.command.setPage("regist");
				Seperator.command.setView();
			}else{
				subject.setId(request.getParameter("id"));
				subject.setMajor(request.getParameter("major"));
				subject.setSubjects(ParamMap.getValues(request, "subject"));
				subjService.insert(subject);
				Seperator.command.setPage("login");
				Seperator.command.setView();
			}
			DispatcherServlet.send(request, response, Seperator.command);
			break;
		case "update":
			member = (MemberBean) session.getAttribute("user");
			member.setEmail(request.getParameter("email"));
			member.setPw(request.getParameter("pw"));
			service.update(member);
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "delete":
			member = (MemberBean) session.getAttribute("user");
			session.invalidate();
			service.delete(member);
			Seperator.command.setDirectory("home");
			Seperator.command.setPage("main");
			Seperator.command.setView();
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "detail":
			System.out.println("젠더당 : "+service.getSession().getGender());
			System.out.println("ssn이당 : "+service.getSession().getSsn());
			Seperator.command.setPage("detail");
			Seperator.command.setView();
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "list":
			request.setAttribute("list", service.list());
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "logout":
			session.invalidate();
			Seperator.command.setDirectory("home");
			Seperator.command.setPage("main");
			Seperator.command.setView();
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "count":
			request.setAttribute("count", service.count());
			Seperator.command.setPage("count");
			Seperator.command.setView();
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		case "find_by_id":
			request.setAttribute("member", service.findById(request.getParameter("keyword")));
			DispatcherServlet.send(request, response, Seperator.command);
			break;
		case "find_by_name":
			request.setAttribute("list", service.findBy(request.getParameter("keyword")));
			DispatcherServlet.send(request, response, Seperator.command);
			break;	
		default:
			break;
		}
	}
}
