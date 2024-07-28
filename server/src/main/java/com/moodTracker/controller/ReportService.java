package com.moodTracker.controller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.moodTracker.domain.dto.ChartDataDTO;
import com.moodTracker.repository.DiaryRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ReportService {

	private final DiaryRepository diaryRepository;

	public List<ChartDataDTO> requestChartData(Integer userSeq, String requestYearMonth) {
		String[] date = requestYearMonth.split("-");
		int year = Integer.parseInt(date[0]);
		int month = Integer.parseInt(date[1]);
		
		return diaryRepository.findEmotionScoresByMonthAndUser(userSeq, year, month);
	}

}
