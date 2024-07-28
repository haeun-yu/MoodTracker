package com.moodTracker.domain.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "MonthlyReport")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyReport {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "monthlyReportSeq")
	private Integer monthlyReportSeq;
	
	@Column(name = "userSeq")
	private Integer userSeq;

	@Column(name = "totalMonthlyEmotionScore")
	private String totalMonthlyEmotionScore;
	
	@Column(name = "reportedMonth")
	private String reportedMonth;
	
	@Column(name = "monthlyFeedback")
	private String monthlyFeedback;

	@CreationTimestamp
	@Column(name = "createdAt", nullable = false)
	private LocalDateTime createdAt;
	
	@CreationTimestamp
	@Column(name = "modifiedAt", nullable = false)
	private LocalDateTime modifiedAt;
	
}
