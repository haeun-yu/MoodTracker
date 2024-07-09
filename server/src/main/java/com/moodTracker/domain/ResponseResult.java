package com.moodTracker.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ResponseResult {
	
	SUCCESS(0, "성공"),
	FAIL(-1, "실패");
	
	private final int code;
	private final String message;
}
