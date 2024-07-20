package com.moodTracker.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moodTracker.domain.dto.DiaryDTO;
import com.moodTracker.domain.entity.Diary;

public interface DiaryRepository extends JpaRepository<Diary, Integer>{

	List<Diary> findByUserSeqAndContentContaining(Integer userSeq, String searchWord);
	Optional<Diary> findByUserSeqAndCreatedAt(Integer userSeq, LocalDateTime localDateTime);
	void save(DiaryDTO diaryDTO);
}
