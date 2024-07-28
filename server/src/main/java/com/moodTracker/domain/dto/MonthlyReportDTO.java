package com.moodTracker.domain.dto;

import com.moodTracker.domain.entity.MonthlyReport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyReportDTO {
	
	private Integer monthlyReportSeq;
	private Integer userSeq;
	private String totalMonthlyEmotionScore;
	private String reportedMonth;
	private String monthlyFeedback;
	
	public MonthlyReport toEntity() {
		return MonthlyReport.builder()
				.monthlyReportSeq(this.monthlyReportSeq)
				.userSeq(this.userSeq)
				.totalMonthlyEmotionScore(this.totalMonthlyEmotionScore)
				.reportedMonth(this.reportedMonth)
				.monthlyFeedback(this.monthlyFeedback)
				.build();
	}
}
