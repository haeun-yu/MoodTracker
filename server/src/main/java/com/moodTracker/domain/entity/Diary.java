package com.moodTracker.domain.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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
@Table(name="Diary")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Diary {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "diarySeq")
	private Integer diarySeq;
	
	@Column(name = "userSeq")
	private Integer userSeq;

	@Column(name = "content")
	private String content;
	
	@Column(name = "feedback")
	private String feedback;
	
	@Column(name = "feedbackCode")
	private String feedbackCode;
	
	@Column(name = "emotion")
	private String emotion;
	
	@CreationTimestamp
	@Column(name = "createdAt", nullable = false)
	private LocalDateTime createdAt;
	
	@CreationTimestamp
	@Column(name = "modifiedAt", nullable = false)
	private LocalDateTime modifiedAt;
	
}
