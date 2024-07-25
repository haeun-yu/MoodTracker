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

}
