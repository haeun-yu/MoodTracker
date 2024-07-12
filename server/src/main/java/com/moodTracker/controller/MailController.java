package com.moodTracker.controller;

import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moodTracker.domain.CommonResponse;
import com.moodTracker.domain.dto.CommonResponseDTO;
import com.moodTracker.service.MailService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/email")
public class MailController {
	
	private final MailService mailService;
	private int number; // 이메일 인증 숫자를 저장하는 변수
	
	// 인증 이메일 전송
	@GetMapping("/mailSend")
	public CommonResponse<?> mailSend(@RequestParam(name="mail") String mail) {
	    HashMap<String, Object> map = new HashMap<>();
	
	    try {
	        number = mailService.sendMail(mail);
	        String num = String.valueOf(number);
	
	        map.put("resultCode", "SUCCESS");
	        map.put("message", "이메일 인증요청 성공");
	        map.put("userNumber", num);
	    } catch (Exception e) {
	        map.put("resultCode", "FAIL");
	        map.put("message", e.getMessage());
	    }
	
	    return CommonResponse.success(map);
	}
	
	// 인증번호 일치여부 확인
	@GetMapping("/mailCheck")
	public CommonResponse<?> mailCheck(@RequestParam(name = "userNumber") String userNumber) {
	
	    boolean isMatch = userNumber.equals(String.valueOf(number));
	
	    if(isMatch) {
	    	return CommonResponse.success(CommonResponseDTO.of("SUCCESS", "이메일 인증 성공"));
	    }
    	return CommonResponse.success(CommonResponseDTO.of("FAIL", "이메일 인증 실패"));
	}
}