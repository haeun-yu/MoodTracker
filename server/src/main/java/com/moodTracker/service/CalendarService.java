package com.moodTracker.service;

import java.time.LocalDate;
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

	/**
	 * 월간 최장연속작성 횟수
	 * @param userSeq
	 * @param requestYearMonth
	 * @return
	 */
	public MonthlyCommonCountDTO requestLongestStreakCount(String userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
        
        Long maxConsecutiveDays = diaryRepository.findMaxConsecutiveDays(userSeq, year, month);
        return new MonthlyCommonCountDTO(maxConsecutiveDays);
	}

	/**
	 * 주간 평균작성횟수
	 * @param string
	 * @param requestYearMonth
	 * @return
	 */
	public Double requestmonthlyWeeklyAverage(String userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
        
        return diaryRepository.findWeeklyAverageEntries(userSeq, year, month);	
	}
	
	
}
