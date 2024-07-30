package com.moodTracker.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moodTracker.domain.dto.MonthlyReportDTO;
import com.moodTracker.domain.entity.MonthlyReport;

public interface MonthlyReportRepository extends JpaRepository<MonthlyReport, Integer> {
	
	//입력받은 YYYY-MM의 감정스코어 합산
    @Query("SELECT SUM(CASE WHEN e.emotionScore = '+1' THEN 1 " +
            "                  WHEN e.emotionScore = '-1' THEN -1 " +
            "                  ELSE 0 END) " +
            "FROM Diary d " +
            "JOIN Emotion e ON d.emotion = e.emotion " +
            "WHERE d.userSeq = :userSeq " +
            "AND (YEAR(d.createdAt) = :year AND MONTH(d.createdAt) = :month)")
     Optional<Long> findEmotionScoresByMonthAndUser(@Param("userSeq") Integer userSeq,
                                          @Param("year") int year,
                                          @Param("month") int month);
    
    //입력받은 YYYY-MM의 월간 피드백 조회
    @Query("SELECT new com.moodTracker.domain.dto.MonthlyReportDTO(" +
    	       "mr.monthlyReportSeq, mr.userSeq, mr.totalMonthlyEmotionScore, " +
    	       "mr.reportedMonth, " +
    	       "mr.monthlyFeedback) " +
    	       "FROM MonthlyReport mr " +
    	       "WHERE mr.userSeq = :userSeq " +
    	       "AND mr.reportedMonth = CONCAT(:year, '-', :month)")
	MonthlyReportDTO findByUserSeqAndReportedMonth(@Param("userSeq") Integer userSeq, @Param("year") int year, @Param("month") int month);   
    
    //입력받은 YYYY-MM에 작성된 Diary가 있는지 확인
    @Query("SELECT COUNT(mr) > 0 " +
    	       "FROM Diary mr " +
    	       "WHERE mr.userSeq = :userSeq " +
    	       "AND YEAR(mr.createdAt) = :year " +
    	       "AND MONTH(mr.createdAt) = :month")
	Boolean existsByUserSeqAndReportedMonth(@Param("userSeq") Integer userSeq, @Param("year") int year, @Param("month") int month);
}
