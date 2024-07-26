package com.moodTracker.controller;

import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moodTracker.domain.CommonResponse;
import com.moodTracker.domain.dto.CommonResponseDTO;
import com.moodTracker.domain.dto.MonthlyEmotionsDTO;
import com.moodTracker.domain.dto.MonthlyTop3EmotionsDTO;
import com.moodTracker.domain.dto.MonthlyCommonCountDTO;
import com.moodTracker.domain.entity.Diary;
import com.moodTracker.domain.entity.User;
import com.moodTracker.service.CalendarService;
import com.moodTracker.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/calendar")
public class CalendarController {
	
	private final CalendarService calendarService;
    private final UserService userService;

    //월간 감정목록 조회
	@GetMapping("/monthly/{userName}")
	public CommonResponse<?> requestEmotions(
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
                Optional<List<MonthlyEmotionsDTO>> monthlyEmotionsList = calendarService.requestEmotions(userSeq.toString(), requestYearMonth);
                return CommonResponse.success(monthlyEmotionsList);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}
	}
	
	//날짜별 일기 조회
	@GetMapping("/date/{userName}")
	public CommonResponse<?> requestDiary(
			@CookieValue(name = "userSeq", required = false) Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "submitDate") String submitDate) {
		
		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
            try {
                log.info("[REQUEST] REQUEST 성공");
                Optional<Diary> searchDiaryByDate = calendarService.searchDiaryByDate(userSeq, submitDate);
                return CommonResponse.success(searchDiaryByDate);
            } catch (DateTimeParseException e) {
                log.error("[REQUEST] 날짜 형식 변환 오류: {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "날짜 형식이 올바르지 않습니다."));
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}
	}		
	
	//Top3 emotions
	@GetMapping("/monthly/top3-emotions/{userName}") 
	public CommonResponse<?> requestTop3Emotions (
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
                Optional<List<MonthlyTop3EmotionsDTO>> monthlyTop3EmotionsList = calendarService.requestTop3Emotions(userSeq.toString(), requestYearMonth);
                return CommonResponse.success(monthlyTop3EmotionsList);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
	
	//월간 작성횟수
	@GetMapping("/monthly/writing-count/{userName}")
	public CommonResponse<?> requestWritingCount (
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
                Optional<MonthlyCommonCountDTO> monthlyWritingCount = calendarService.requestWritingCount(userSeq.toString(), requestYearMonth);
                return CommonResponse.success(monthlyWritingCount);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
	
	//월간 최장연속작성 횟수
	@GetMapping("/monthly/longest-streak/{userName}")
	public CommonResponse<?> requestLongestStreak (
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
                MonthlyCommonCountDTO monthlyLongestStreakCount = calendarService.requestLongestStreakCount(userSeq.toString(), requestYearMonth);
                return CommonResponse.success(monthlyLongestStreakCount);
            } catch (Exception e) {
                log.error("[REQUEST] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[REQUEST] REQUEST 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}	
	}
	
	//주간 평균작성횟수
	@GetMapping("/monthly/weekly-average/{userName}")
	public CommonResponse<?> requestWeeklyAverage (
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
                Double monthlyWeeklyAverage = calendarService.requestmonthlyWeeklyAverage(userSeq.toString(), requestYearMonth);
                return CommonResponse.success(monthlyWeeklyAverage);
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
