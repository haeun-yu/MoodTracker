package com.moodTracker.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.moodTracker.domain.dto.MonthlyEmotionsDTO;
import com.moodTracker.domain.dto.MonthlyTop3EmotionsDTO;
import com.moodTracker.domain.dto.ChartDataDTO;
import com.moodTracker.domain.dto.MonthlyCommonCountDTO;
import com.moodTracker.domain.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Integer>{

	List<Diary> findByUserSeqAndContentContaining(Integer userSeq, String searchWord);
	Optional<Diary> findByUserSeqAndCreatedAt(Integer userSeq, LocalDateTime localDateTime);
//	Optional<List<Diary>> findByUserSeqAndCreatedAtYearAndCreatedAtMonth(String userSeq, int year, int month);
	
    @Query("SELECT new com.moodTracker.domain.dto.MonthlyEmotionsDTO(d.emotion, d.createdAt) " +
            "FROM Diary d " +
            "WHERE d.userSeq = :userSeq " +
            "AND YEAR(d.createdAt) = :year " +
            "AND MONTH(d.createdAt) = :month ")
    Optional<List<MonthlyEmotionsDTO>> findByUserseqAndYearAndMonth(@Param("userSeq") String userseq,
                                                                    @Param("year") int year,
                                                                    @Param("month") int month);

    @Query("SELECT new com.moodTracker.domain.dto.MonthlyTop3EmotionsDTO(d.emotion, COUNT(d)) " +
            "FROM Diary d " +
            "WHERE d.userSeq = :userSeq " +
            "AND YEAR(d.createdAt) = :year " +
            "AND MONTH(d.createdAt) = :month " +
            "GROUP BY d.emotion " +
            "ORDER BY COUNT(d) DESC")
    Optional<List<MonthlyTop3EmotionsDTO>> findTop3EmotionsByUserseqAndYearAndMonth(@Param("userSeq") String userSeq,
                                                                          @Param("year") int year,
                                                                          @Param("month") int month,
                                                                          Pageable pageable);
    
    @Query("SELECT new com.moodTracker.domain.dto.MonthlyCommonCountDTO(COUNT(d)) " +
            "FROM Diary d " +
            "WHERE d.userSeq = :userSeq " +
            "AND YEAR(d.createdAt) = :year " +
            "AND MONTH(d.createdAt) = :month ")
    Optional<MonthlyCommonCountDTO> findWrintingCountByUserseqAndYearAndMonth(@Param("userSeq") String userSeq,
		                                                                    @Param("year") int year,
		                                                                    @Param("month") int month);
    
    @Query(value = "SELECT MAX(consecutive_days) " +
            "FROM ( " +
            "    SELECT " +
            "        DATEDIFF(MAX(createdAt), MIN(createdAt)) + 1 AS consecutive_days " +
            "    FROM ( " +
            "        SELECT " +
            "            createdAt, " +
            "            createdAt - @rownum := @rownum + 1 AS grp " +
            "        FROM ( " +
            "            SELECT " +
            "                createdAt " +
            "            FROM Diary " +
            "            WHERE userSeq = :userSeq " +
            "            AND YEAR(createdAt) = :year " +
            "            AND MONTH(createdAt) = :month " +
            "            ORDER BY createdAt " +
            "        ) AS t, (SELECT @rownum := 0) r " +
            "    ) AS s " +
            "    GROUP BY s.grp " +
            ") AS t", nativeQuery = true)
     Long findMaxConsecutiveDays(@Param("userSeq") String userSeq,
                                    @Param("year") int year,
                                    @Param("month") int month);

    @Query(value = "SELECT AVG(weekly_count) " +
            "FROM ( " +
            "    SELECT " +
            "        WEEK(createdAt, 1) AS week, " +
            "        COUNT(*) AS weekly_count " +
            "    FROM Diary " +
            "    WHERE userSeq = :userSeq " +
            "    AND YEAR(createdAt) = :year " +
            "    AND MONTH(createdAt) = :month " +
            "    GROUP BY WEEK(createdAt, 1) " +
            ") AS weekly_stats", nativeQuery = true)
    Double findWeeklyAverageEntries(@Param("userSeq") String userSeq,
                                    @Param("year") int year,
                                    @Param("month") int month);
    
    /**
     * 일기 존재여부 조회
     * @param userSeq
     * @param localDateTime
     * @return
     */
    @Query("SELECT COUNT(d) > 0 FROM Diary d WHERE d.userSeq = :userSeq AND FUNCTION('DATE', d.createdAt) = FUNCTION('DATE', :date)")
    Boolean existsByDateAndUserSeq(@Param("userSeq") Integer userSeq, @Param("date") LocalDateTime date);
    
    /**
     * 차트 데이터 조회
     * @param userSeq
     * @param year
     * @param month
     * @return
     */
    @Query("SELECT new com.moodTracker.domain.dto.ChartDataDTO(CONCAT(YEAR(d.createdAt), '-', LPAD(CAST(MONTH(d.createdAt) AS string), 2, '0')), "
    	       + "COALESCE(SUM(CASE WHEN e.emotionScore = '+1' THEN 1 WHEN e.emotionScore = '-1' THEN -1 ELSE 0 END), 0)) "
    	       + "FROM Diary d LEFT JOIN Emotion e ON d.emotion = e.emotion "
    	       + "WHERE d.userSeq = :userSeq AND YEAR(d.createdAt) = :year "
    	       + "GROUP BY YEAR(d.createdAt), MONTH(d.createdAt) "
    	       + "ORDER BY YEAR(d.createdAt) DESC, MONTH(d.createdAt) DESC")
    	List<ChartDataDTO> findEmotionScoresByYear(@Param("userSeq") Integer userSeq, @Param("year") int year);
//    @Query("SELECT COALESCE(SUM(CASE WHEN e.emotionScore = '+1' THEN 1 WHEN e.emotionScore = '-1' THEN -1 ELSE 0 END), 0) "
//    	       + "FROM Diary d LEFT JOIN Emotion e ON d.emotion = e.emotion "
//    	       + "WHERE d.userSeq = :userSeq AND YEAR(d.createdAt) = :year "
//    	       + "GROUP BY MONTH(d.createdAt) "
//    	       + "ORDER BY MONTH(d.createdAt)")
//	List<Integer> findEmotionScoresByYear(@Param("userSeq") Integer userSeq, @Param("year") int year);
}
