package com.moodTracker.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.moodTracker.domain.dto.ChartDataDTO;
import com.moodTracker.domain.dto.MonthlyReportDTO;
import com.moodTracker.repository.DiaryRepository;
import com.moodTracker.repository.MonthlyReportRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ReportService {

	private final DiaryRepository diaryRepository;
	private final MonthlyReportRepository monthlyReportRepository;
	
	public int[] requestChartData(Integer userSeq, String requestYearMonth) {
	    String[] date = requestYearMonth.split("-");
	    int year = Integer.parseInt(date[0]);

	    // 데이터베이스에서 조회한 결과
	    List<ChartDataDTO> dbResult = diaryRepository.findEmotionScoresByYear(userSeq, year);

	    // 월별 감정 점수 배열 생성
	    int[] result = new int[12];

	    // 데이터베이스 결과를 기반으로 감정 점수 업데이트
	    for (ChartDataDTO dbData : dbResult) {
	        String[] dateParts = dbData.getDate().split("-");
	        int month = Integer.parseInt(dateParts[1]) - 1; // 월 배열 인덱스는 0부터 시작
	        result[month] = dbData.getScore().intValue(); // Long 값을 int로 변환하여 저장
	    }

	    return result;
	}

	public void submitMonthlyReport(MonthlyReportDTO monthlyReportDTO) {
		Integer userSeq = monthlyReportDTO.getUserSeq();
		String[] date = monthlyReportDTO.getReportedMonth().split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
		
		monthlyReportDTO.setTotalMonthlyEmotionScore((monthlyReportRepository.findEmotionScoresByMonthAndUser(userSeq, year, month)).toString());
		monthlyReportRepository.save(monthlyReportDTO.toEntity());
	}

	public MonthlyReportDTO requestMonthlyFeedback(Integer userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
		
		return monthlyReportRepository.findByUserSeqAndReportedMonth(userSeq, year, month);
	}

	public Boolean checkDiaryExists(Integer userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
		
		return monthlyReportRepository.existsByUserSeqAndReportedMonth(userSeq, year, month);
	}

}
