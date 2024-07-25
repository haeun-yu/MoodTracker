package com.moodTracker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class HomeController {
	
	//Spring API 경로는 /api로 시작
	@RequestMapping(value = "/{path:[^\\\\.]*}")
	public String viewMapping() {
		return "forward:/index.html";
	}
}