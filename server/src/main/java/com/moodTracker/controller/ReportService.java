package com.moodTracker.controller;

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

    public List<ChartDataDTO> requestChartData(Integer userSeq, String requestYearMonth) {
        String[] date = requestYearMonth.split("-");
        int year = Integer.parseInt(date[0]);

        // 데이터베이스에서 조회한 결과
        List<ChartDataDTO> dbResult = diaryRepository.findEmotionScoresByYear(userSeq, year);

        // 모든 월을 포함하는 결과 리스트 생성
        List<ChartDataDTO> result = generateAllMonths(year);

        // 데이터베이스 결과를 기반으로 감정 점수 업데이트
        for (ChartDataDTO dbData : dbResult) {
            for (ChartDataDTO monthData : result) {
                if (dbData.getDate().equals(monthData.getDate())) {
                    monthData.setScore(dbData.getScore());
                    break;
                }
            }
        }

        return result;
    }

    // 모든 월을 포함하는 리스트 생성
    private List<ChartDataDTO> generateAllMonths(int year) {
        List<ChartDataDTO> result = new ArrayList<>();
        for (int month = 1; month <= 12; month++) {
            String monthString = String.format("%02d", month);
            result.add(new ChartDataDTO(year + "-" + monthString, 0L)); // 초기 점수는 0으로 설정
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
}
