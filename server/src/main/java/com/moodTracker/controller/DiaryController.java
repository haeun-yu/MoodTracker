package com.moodTracker.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.Optional;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moodTracker.domain.CommonResponse;
import com.moodTracker.domain.dto.CommonResponseDTO;
import com.moodTracker.domain.dto.DiaryDTO;
import com.moodTracker.domain.entity.Diary;
import com.moodTracker.domain.entity.User;
import com.moodTracker.service.DiaryService;
import com.moodTracker.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/diary")
public class DiaryController {
	
	private final DiaryService diaryService;
    private final UserService userService;

    //일기 저장
	@PostMapping("/submit/{userName}")
	public CommonResponse<?> submitDiary(
			@CookieValue(name = "userSeq", required = false) Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestBody DiaryDTO diaryDTO) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
			try {
				
				//쿠키로 받아온 유저정보 다이어리DTO에 전달
				diaryDTO.setUserSeq(userSeq);
				
		        // 동일한 날짜의 일기가 이미 존재하는지 확인
		        Optional<Diary> existingDiaryOptional = diaryService.findDiaryByUserSeqAndDate(userSeq, LocalDateTime.now().toLocalDate().atStartOfDay());

		        if (existingDiaryOptional.isPresent()) {
		            // 이미 일기가 존재하면 업데이트 수행
		            Diary existingDiary = existingDiaryOptional.get();
		            diaryDTO.setDiarySeq(existingDiary.getDiarySeq()); // 기존 일기의 ID 설정
		            
		            log.info("[SUBMIT] UPDATE 성공");
		            diaryService.updateDiary(diaryDTO);
		        	return CommonResponse.success(CommonResponseDTO.of("SUCCESS","UPDATE 성공"));
		        } else {
					log.info("[SUBMIT] INSERT 성공");
		        	diaryService.submitDiary(diaryDTO);
		        	return CommonResponse.success(CommonResponseDTO.of("SUCCESS","INSERT 성공"));
		        }
	        } catch (Exception e) {
                log.error("[SUBMIT] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
			}

		} else {
			log.info("[SUBMIT] INSERT 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}
	}
	
	//일기 검색
	@GetMapping("/searchByKeword/{userName}")
	public CommonResponse<?> searchDiaryByKeword(
			@CookieValue(name = "userSeq", required = false) Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "searchWord") String searchWord) {

		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
			log.info("[SEARCH] SEARCH 성공");
	        return CommonResponse.success(diaryService.searchDiaryByKeword(userSeq, searchWord));
		} else {
			log.info("[SEARCH] SEARCH 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}		
	}
	
	//날짜별 조회
	@GetMapping("searchByDate/{userName}/date")
	public CommonResponse<?> searchDiaryByDate(
			@CookieValue(name = "userSeq", required = false) Integer userSeq,
			@PathVariable("userName") String userName,
			@RequestParam(name = "submitDate") String submitDate) {
		
		//쿠키의 userSeq값으로 유저 정보조회
		User user = userService.getLoginUser(userSeq);
			
		//쿠키로 조회한 유저명과 쿼리스트링으로 넘어온 유저명 비교
		if(user.getUserName().equals(userName)) {
            try {
                log.info("[SEARCH] SEARCH 성공");
                Optional<Diary> searchDiaryByDate = diaryService.searchDiaryByDate(userSeq, submitDate);
                return CommonResponse.success(searchDiaryByDate);
            } catch (DateTimeParseException e) {
                log.error("[SEARCH] 날짜 형식 변환 오류: {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "날짜 형식이 올바르지 않습니다."));
            } catch (Exception e) {
                log.error("[SEARCH] 예외발생 : {}", e.getMessage());
                return CommonResponse.success(CommonResponseDTO.of("FAIL", "[예외발생] " + e.getMessage()));
            }
		} else {
			log.info("[SEARCH] SEARCH 실패");
	        return CommonResponse.success(CommonResponseDTO.of("FAIL", "잘못된 접근입니다."));
		}		
	}
}
