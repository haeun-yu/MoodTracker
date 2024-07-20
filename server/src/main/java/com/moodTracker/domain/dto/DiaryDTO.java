package com.moodTracker.domain.dto;

import com.moodTracker.domain.entity.Diary;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DiaryDTO {
	
	private Integer diarySeq;
	private Integer userSeq;
	private String content;
	private String feedback;
	private String feedbackCode;
	private String emotion;
	
	public Diary toEntity() {
		return Diary.builder()
				.diarySeq(this.diarySeq)
				.userSeq(this.userSeq)
				.content(this.content)
				.feedback(this.feedback)
				.feedbackCode(this.feedbackCode)
				.emotion(this.emotion)
				.build();
	}
	
    @Override
    public String toString() {
        return "DiaryDTO{" +
        		"diarySeq=" + diarySeq +
                "userSeq=" + userSeq +
                ", content='" + content + '\'' +
                ", feedback='" + feedback + '\'' +
                ", feedbackCode='" + feedbackCode + '\'' +
                ", emotion='" + emotion + '\'' +
                '}';
    }
	
	
}
