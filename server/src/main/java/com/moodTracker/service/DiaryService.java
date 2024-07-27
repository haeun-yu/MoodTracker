package com.moodTracker.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.moodTracker.domain.dto.DiaryDTO;
import com.moodTracker.domain.entity.Diary;
import com.moodTracker.repository.DiaryRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DiaryService {
	
	private final DiaryRepository diaryRepository;
	
	/**
	 * 일기등록 기능
	 * @param diaryDTO
	 */
	public void submitDiary(DiaryDTO diaryDTO) {
		diaryRepository.save(diaryDTO.toEntity());
	}
	
	/**
	 * 재등록시 업데이트
	 * @param diaryDTO
	 */
	 public void updateDiary(DiaryDTO diaryDTO) {
	        diaryRepository.save(diaryDTO.toEntity());
	    }

	 /**
	  * 유저 일련번호와 날짜로 일기 조회
	  * @param localDateTime
	  * @param userSeq
	  * @return
	  */
	    public Optional<Diary> findDiaryByUserSeqAndDate(Integer userSeq, LocalDateTime localDateTime) {
	        return diaryRepository.findByUserSeqAndCreatedAt(userSeq, localDateTime);
	    }
	
	/**
	 * 키워드로 일기검색 기능
	 * @param searchWord
	 */
	public List<Diary> searchDiaryByKeword(Integer userSeq, String searchWord) {
		return diaryRepository.findByUserSeqAndContentContaining(userSeq, searchWord);
	}

	/**
	 * 날짜와 userSeq로 일기 존재여부 조회
	 * @param userSeq
	 * @param requestYearMonth
	 * @return
	 */
	public boolean searchDiaryExistence(Integer userSeq, String searchDate) {
        return diaryRepository.existsByDateAndUserSeq(userSeq, parseDateTime(searchDate));	
        
	}
	
    /**
     * YYYY-MM-DD 형식의 String 타입을 LocalDateTime으로 변환
     * @param dateString
     * @return
     */
    public LocalDateTime parseDateTime(String dateString) throws DateTimeParseException {
        try {
            // 날짜 형식이 유효하지 않으면 예외 처리
            LocalDate date = parseDate(dateString);
            // LocalDate를 LocalDateTime으로 변환
            return date.atStartOfDay();
        } catch (DateTimeParseException e) {
            // 예외 처리: 날짜 형식이 올바르지 않을 경우
            throw new DateTimeParseException("Invalid date format", dateString, e.getErrorIndex(), e);
        }
    }

    /**
     * YYYY-M-D 형식의 String 타입을 LocalDate로 변환
     * @param dateString
     * @return
     */
    private LocalDate parseDate(String dateString) throws DateTimeParseException {
        // 입력된 날짜 문자열을 정규화하여 올바른 형식으로 변환
        String normalizedDateString = normalizeDateString(dateString);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(normalizedDateString, formatter);
    }

    /**
     * 입력된 날짜 문자열을 'yyyy-MM-dd' 형식으로 변환
     * @param dateString
     * @return
     */
    private String normalizeDateString(String dateString) {
        // 날짜 문자열을 파싱하여 LocalDate 객체를 생성
        LocalDate date = LocalDate.parse(dateString, DateTimeFormatter.ofPattern("yyyy-M-d"));
        // LocalDate 객체를 'yyyy-MM-dd' 형식의 문자열로 변환
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return date.format(formatter);
    }
}
