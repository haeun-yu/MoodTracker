package com.moodTracker.domain.dto;

public class ChartDataDTO {
    private String date;
    private Long score;

    // 모든 필드를 포함하는 생성자
    public ChartDataDTO(String date, Long score) {
        this.date = date;
        this.score = score;
    }

    // getter 및 setter
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }
}