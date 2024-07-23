package com.moodTracker.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.moodTracker.domain.dto.MonthlyEmotionsDTO;
import com.moodTracker.domain.dto.MonthlyTop3EmotionsDTO;
import com.moodTracker.domain.dto.MonthlyCommonCountDTO;
import com.moodTracker.domain.entity.Diary;
import com.moodTracker.repository.DiaryRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CalendarService {

	private final DiaryRepository diaryRepository;
	
	/**
	 * 월간 감정목록 검색 (YYYY-MM)
	 * @param requestMonth
	 * @return
	 */
	public Optional<List<MonthlyEmotionsDTO>> requestEmotions(String userSeq, String requestMonth) {
		String[] date = requestMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
		
		return diaryRepository.findByUserseqAndYearAndMonth(userSeq, year, month);
	}
	
	/**
	 * YYYY-MM-DD 형식의 String 타입을 LocalDateTime으로 변환
	 * @param dateString
	 * @return
	 */
    public LocalDateTime parseDateTime(String dateString) throws DateTimeParseException {
        try {
            String dateTimeString = dateString + "T00:00:00"; // 여기서 T는 날짜와 시간을 구분하는 구분자입니다.
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
            return LocalDateTime.parse(dateTimeString, formatter);
        } catch (DateTimeParseException e) {
            // 예외 처리: 날짜 형식이 올바르지 않을 경우 	
            throw new DateTimeParseException("Invalid date format", dateString, e.getErrorIndex(), e);
        }
    }
	
	/**
	 * 날짜로 일기검색 기능 (YYYY-MM-DD)
	 * @param searchDate
	 * @return
	 */
	public Optional<Diary> searchDiaryByDate(Integer userSeq, String searchDate) {
		return diaryRepository.findByUserSeqAndCreatedAt(userSeq, parseDateTime(searchDate));
		
	}
	
	/**
	 * 월간 Top3 emotions
	 * @param userSeq
	 * @param requestYearMonth
	 * @return
	 */
	public Optional<List<MonthlyTop3EmotionsDTO>> requestTop3Emotions(String userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
        Pageable pageable = PageRequest.of(0, 3); // 상위 3개 결과만 가져오기
        
        return diaryRepository.findTop3EmotionsByUserseqAndYearAndMonth(userSeq, year, month, pageable);
	}

	/**
	 * 월간 작성횟수
	 * @param userSeq
	 * @param requestYearMonth
	 * @return
	 */
	public Optional<MonthlyCommonCountDTO> requestWritingCount(String userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
        
        return diaryRepository.findWrintingCountByUserseqAndYearAndMonth(userSeq, year, month);	
    }

	public MonthlyCommonCountDTO requestLongestStreakCount(String userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
        
        Long maxConsecutiveDays = diaryRepository.findMaxConsecutiveDays(userSeq, year, month);
        return new MonthlyCommonCountDTO(maxConsecutiveDays);
	}
	
	
}
