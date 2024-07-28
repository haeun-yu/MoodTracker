package com.moodTracker.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Emotion")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Emotion {
	
	@Id
	@Column(name = "emotion")
	private String emotion;
	
	@Column(name = "emotionScore")
	private String emotionScore;
	
	
}
