package com.moodTracker.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.moodTracker.domain.dto.DiaryDTO;
import com.moodTracker.domain.entity.Diary;
import com.moodTracker.repository.DiaryRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class DiaryService {
	
	private final DiaryRepository diaryRepository;
	
	/**
	 * 일기등록 기능
	 * @param diaryDTO
	 */
	public void submitDiary(DiaryDTO diaryDTO) {
		diaryRepository.save(diaryDTO.toEntity());
	}
	
	/**
	 * 재등록시 업데이트
	 * @param diaryDTO
	 */
	 public void updateDiary(DiaryDTO diaryDTO) {
	        diaryRepository.save(diaryDTO.toEntity());
	    }

	 /**
	  * 유저 일련번호와 날짜로 일기 조회
	  * @param localDateTime
	  * @param userSeq
	  * @return
	  */
	    public Optional<Diary> findDiaryByUserSeqAndDate(Integer userSeq, LocalDateTime localDateTime) {
	        return diaryRepository.findByUserSeqAndCreatedAt(userSeq, localDateTime);
	    }
	
	/**
	 * 키워드로 일기검색 기능
	 * @param searchWord
	 */
	public List<Diary> searchDiaryByKeword(Integer userSeq, String searchWord) {
		return diaryRepository.findByUserSeqAndContentContaining(userSeq, searchWord);
	}
}
