package com.moodTracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moodTracker.domain.CommonResponse;
import com.moodTracker.domain.dto.ChartDataDTO;
import com.moodTracker.domain.dto.CommonResponseDTO;
import com.moodTracker.domain.dto.MonthlyReportDTO;
import com.moodTracker.domain.entity.User;
import com.moodTracker.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/report")
public class ReportController {
	
	private final ReportService reportService;
    private final UserService userService;
    
    @GetMapping("/chart/{userName}")
	public CommonResponse<?> requestChartData (
			@CookieValue(name = "userSeq") Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "requestYearMonth") String requestYearMonth
			) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
            try {
                log.info("[REQUEST] REQUEST 성공");
                List<ChartDataDTO> chartData = reportService.requestChartData(userSeq, requestYearMonth);
                return CommonResponse.success(chartData);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
    
    @GetMapping("/monthlyFeedback/{userName}")
    public CommonResponse<?> requestMonthlyFeedback (
			@CookieValue(name = "userSeq") Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "requestYearMonth") String requestYearMonth
			) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
            try {
                log.info("[REQUEST] REQUEST 성공");
                MonthlyReportDTO monthlyFeedback = reportService.requestMonthlyFeedback(userSeq, requestYearMonth);
                return CommonResponse.success(monthlyFeedback);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}		
	}
    
    @PostMapping("/submit")
	public CommonResponse<?> submitMonthlyReport (
			@CookieValue(name = "userSeq") Integer userSeq,
			@RequestBody MonthlyReportDTO monthlyReportDTO
			) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		if(user != null) {
            try {
            	//쿠키로 받아온 유저정보 다이어리DTO에 전달
            	monthlyReportDTO.setUserSeq(userSeq);
            	
                log.info("[REQUEST] REQUEST 성공");
                reportService.submitMonthlyReport(monthlyReportDTO);
                return CommonResponse.success(CommonResponseDTO.of("SUCCESS", "INSERT 성공"));
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
    
    @GetMapping("/check/{userName}")
	public CommonResponse<?> checkDiaryExists (
			@CookieValue(name = "userSeq") Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "requestYearMonth") String requestYearMonth
			) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
            try {
                log.info("[REQUEST] REQUEST 성공");
                Boolean isDiaryWrittenForMonth = reportService.checkDiaryExists(userSeq, requestYearMonth);
                return CommonResponse.success(isDiaryWrittenForMonth);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
	
}
