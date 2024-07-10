package com.moodTracker.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CommonResponse<T> {
	private final int code;
	private final String message;
	private final T data;
	
	//API response SUCCESS
	public static <T> CommonResponse<T> success(T data) {
		return new CommonResponse<>(ResponseResult.SUCCESS.getCode(), ResponseResult.SUCCESS.getMessage(), data);
	}
	
	//API response FAIL
	public static <T> CommonResponse<T> fail(T data) {
		return new CommonResponse<>(ResponseResult.FAIL.getCode(), ResponseResult.FAIL.getMessage(), data);
	}
}
