package com.moodTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moodTracker.domain.dto.MonthlyReportDTO;
import com.moodTracker.domain.entity.MonthlyReport;

public interface MonthlyReportRepository extends JpaRepository<MonthlyReport, Integer> {
	
    @Query("SELECT SUM(CASE WHEN e.emotionScore = '+1' THEN 1 " +
            "                  WHEN e.emotionScore = '-1' THEN -1 " +
            "                  ELSE 0 END) " +
            "FROM Diary d " +
            "JOIN Emotion e ON d.emotion = e.emotion " +
            "WHERE d.userSeq = :userSeq " +
            "AND (YEAR(d.createdAt) = :year AND MONTH(d.createdAt) = :month)")
     Long findEmotionScoresByMonthAndUser(@Param("userSeq") Integer userSeq,
                                          @Param("year") int year,
                                          @Param("month") int month);
    
    @Query("SELECT new com.moodTracker.domain.dto.MonthlyReportDTO(" +
    	       "mr.monthlyReportSeq, mr.userSeq, mr.totalMonthlyEmotionScore, " +
    	       "CONCAT(FUNCTION('YEAR', mr.createdAt), '-', " +
    	       "LPAD(CAST(FUNCTION('MONTH', mr.createdAt) AS string), 2, '0')), " +
    	       "mr.monthlyFeedback) " +
    	       "FROM MonthlyReport mr " +
    	       "WHERE mr.userSeq = :userSeq " +
    	       "AND YEAR(mr.createdAt) = :year " +
    	       "AND MONTH(mr.createdAt) = :month ")
    MonthlyReportDTO findByUserSeqAndReportedMonth(@Param("userSeq") Integer userSeq, @Param("year") int year, @Param("month") int month);

}
