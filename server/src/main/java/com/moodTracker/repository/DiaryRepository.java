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
    
    @Query("SELECT MAX(DATEDIFF(d2.createdAt, d1.createdAt) + 1) " +
            "FROM Diary d1 " +
            "JOIN Diary d2 ON d2.createdAt = (SELECT MIN(d3.createdAt) FROM Diary d3 WHERE d3.createdAt > d1.createdAt AND d3.userSeq = :userSeq) " +
            "WHERE d1.userSeq = :userSeq " +
            "AND YEAR(d1.createdAt) = :year " +
            "AND MONTH(d1.createdAt) = :month")
     Long findMaxConsecutiveDays(@Param("userSeq") String userSeq,
                                    @Param("year") int year,
                                    @Param("month") int month);

}
