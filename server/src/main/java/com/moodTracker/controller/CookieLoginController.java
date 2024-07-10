package com.moodTracker.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.moodTracker.domain.CommonResponse;
import com.moodTracker.domain.UserRole;
import com.moodTracker.domain.dto.CommonResponseDTO;
import com.moodTracker.domain.dto.JoinFormDTO;
import com.moodTracker.domain.dto.LoginFormDTO;
import com.moodTracker.domain.dto.LoginStatusDTO;
import com.moodTracker.domain.dto.ResetPasswordDTO;
import com.moodTracker.domain.dto.UserInfoDTO;
import com.moodTracker.domain.entity.User;
import com.moodTracker.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
	
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class CookieLoginController {

    private final UserService userService;

    //index 접속(초기접속)시 쿠키값 확인하여 로그인 여부 체크
    @GetMapping(value = {"", "/"})
    public CommonResponse<LoginStatusDTO> home(@CookieValue(name = "userSeq", required = false) Integer userSeq) {
        //쿠키의 userSeq값으로 유저 정보조회
        User loginUser = userService.getLoginUser(userSeq);
        //User 객체를 LoginStatusDTO로 변환
        LoginStatusDTO loginStatusDTO = new LoginStatusDTO();

        //사용자의 로그인 정보 확인
        if(loginUser != null) {
        	//User정보가 null이 아닌경우에만 값 가져오기(NullPointException 방지)
            loginStatusDTO.setLoggedIn(true);
            loginStatusDTO.setUserSeq(loginUser.getUserSeq());
            loginStatusDTO.setUserName(loginUser.getUserName());
            loginStatusDTO.setMessage("LogIn User");
            
            log.info("[HOME] Login UserName : {}", loginUser.getUserName());
            return CommonResponse.success(loginStatusDTO);
        } else {
            loginStatusDTO.setLoggedIn(false);
            loginStatusDTO.setMessage("Not Login User");
        	
            log.info("[HOME] Not Login User");
            return CommonResponse.success(loginStatusDTO);
        }
    }

    @PostMapping("/join")
    public CommonResponse<?> join(@Valid @RequestBody JoinFormDTO joinFormDTO, BindingResult bindingResult) {

        //email 중복체크
        if(userService.checkLoginIdDuplicate(joinFormDTO.getEmail())) {
            bindingResult.addError(new FieldError("joinFormDTO", "email", "이메일이 중복됩니다."));
        }
        if(userService.checkNicknameDuplicate(joinFormDTO.getUserName())) {
            bindingResult.addError(new FieldError("joinFormDTO", "userName", "닉네임이 중복됩니다."));
        }
        if(bindingResult.hasErrors()) {
            // 클라이언트에게 오류 메시지 전달
            List<FieldError> fieldErrors = bindingResult.getFieldErrors();
            StringBuilder errorMessage = new StringBuilder();
            for (FieldError error : fieldErrors) {
                errorMessage.append(error.getDefaultMessage()).append("/ ");
            }
            log.info("[JOIN] 회원가입 실패: {}", errorMessage.toString());
            return CommonResponse.success(CommonResponseDTO.of("FAIL", errorMessage.toString()));
        }

        userService.join(joinFormDTO);
        log.info("[JOIN] 회원가입 성공");
        return CommonResponse.success(CommonResponseDTO.of("SUCCESS", "회원가입 성공"));
    }

    @PostMapping("/login")
    public CommonResponse<?> login(@RequestBody LoginFormDTO loginFormDTO, BindingResult bindingResult, HttpServletResponse response) {
        User user = userService.login(loginFormDTO);

        // 로그인 아이디나 비밀번호가 틀린 경우 global error return
        if(user == null) {
            bindingResult.reject("loginFail", "로그인 아이디 또는 비밀번호가 틀렸습니다.");
        }

        if(bindingResult.hasErrors()) {
            log.info("[LOGIN] 로그인 실패");
            return CommonResponse.success(CommonResponseDTO.of("FAIL","로그인 실패"));
        }

        // 로그인 성공 => 쿠키 생성
        Cookie cookie = new Cookie("userSeq", String.valueOf(user.getUserSeq()));
        cookie.setMaxAge(60 * 60);  // 쿠키 유효 시간 : 1시간
        response.addCookie(cookie);

        log.info("[LOGIN] 로그인 성공 : {}", user.getUserName());
        return CommonResponse.success(CommonResponseDTO.of("SUCCESS","로그인 성공"));
    }

    @GetMapping("/logout")
    public CommonResponse<?> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("userSeq", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        log.info("[LOGOUT] 로그아웃 성공");
        return CommonResponse.success(CommonResponseDTO.of("SUCCESS","로그아웃 성공"));
    }

    @PostMapping("/info")
    public CommonResponse<?> userInfo(@CookieValue(name = "userSeq", required = false) Integer userSeq) {
        User loginUser = userService.getLoginUser(userSeq);
        UserInfoDTO userInfoDTO = new UserInfoDTO();
        
        if(loginUser == null) {
            return CommonResponse.success(userInfoDTO);
        } else {
        	
        	//userInfoDTO에 값 전달
	        userInfoDTO.setEmail(loginUser.getEmail());
	        userInfoDTO.setName(loginUser.getUserName());
	        return CommonResponse.success(userInfoDTO);
        }
    }

    @PostMapping("/reset")
    public CommonResponse<?> ResetPassword(@Valid @RequestBody ResetPasswordDTO resetPasswordDTO, @CookieValue(name = "userSeq", required = false) Integer userSeq,  BindingResult bindingResult) {
    	User loginUser = userService.getLoginUser(userSeq);
    	if(loginUser == null) {
    		//로그인 전 패스워드 변경 <이메일 인증 필요>
    		return null;
    	} else {
    		//쿠키 값 가진채로 PW 변경
    		if(!resetPasswordDTO.getCurrentPassword().equals(loginUser.getPassword())) {
    			bindingResult.addError(new FieldError("resetPasswordDTO", "password", "현재 패스워드가 틀립니다."));
    		}
    		if(resetPasswordDTO.getNewPassword().equals(loginUser.getPassword())) {
    			bindingResult.addError(new FieldError("resetPasswordDTO", "password", "새 패스워드가 현재 패스워드와 같습니다."));
    		}
            if(bindingResult.hasErrors()) {
                // 클라이언트에게 오류 메시지 전달
                List<FieldError> fieldErrors = bindingResult.getFieldErrors();
                StringBuilder errorMessage = new StringBuilder();
                for (FieldError error : fieldErrors) {
                    errorMessage.append(error.getDefaultMessage()).append("/ ");
                }
                log.info("[RESET] 패스워드 변경 실패: {}", errorMessage.toString());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", errorMessage.toString()));
            }
            resetPasswordDTO.setUserSeq(userSeq);
    		userService.reset(resetPasswordDTO);
            return CommonResponse.success(CommonResponseDTO.of("SUCCESS", "패스워드 변경 성공"));
    	}
    }
    
    @DeleteMapping("/withdraw")
    public CommonResponse<?> withdrawUser(@CookieValue(name = "userSeq") Integer userSeq, @RequestParam(name = "password") String userPassword) {
    	User withdrawUser = userService.getLoginUser(userSeq);
    		
    	//패스워드만 받는 폼이므로, 굳이 DTO생성 없이 처리
    	if(userPassword == withdrawUser.getPassword()) {
    		userService.withdrawUser(userSeq);
    		log.info("[WITHDRAW] 회원탈퇴 완료");
            return CommonResponse.success(CommonResponseDTO.of("SUCCESS","회원탈퇴 성공"));
    	} else {
    		log.info("[WITHDRAW] 회원탈퇴 실패");
            return CommonResponse.success(CommonResponseDTO.of("FAIL","회원탈퇴 실패"));

    	}
    }
    
//    ResposeEntity를 이용한 API 결과값 반환 및 예외처리 구현
//    @DeleteMapping("/withdraw")
//    public ResponseEntity<?> withdrawUser(@RequestParam(name = "userId") Long userId) {
//        try {
//            // 회원 탈퇴 로직 실행
//            userService.withdrawUser(userId);
//
//            return ResponseEntity.ok("회원 탈퇴 성공");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원 탈퇴 실패: " + e.getMessage());
//        }
//    }
//    어드민 페이지
//    @GetMapping("/admin")
//    public String adminPage(@CookieValue(name = "userSeq", required = false) Integer userSeq) {
//        User loginUser = userService.getLoginUser(userSeq);
//
//        if(loginUser == null) {
//            return "redirect:/auth/login";
//        }
//
//        if(!loginUser.getRole().equals(UserRole.ADMIN)) {
//            return "redirect:/auth";
//        }
//
//        return "auth/admin";
//    }
}
