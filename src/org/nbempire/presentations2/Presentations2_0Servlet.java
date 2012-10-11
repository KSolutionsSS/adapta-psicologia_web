package org.nbempire.presentations2;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Presentations2_0Servlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
