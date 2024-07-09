package com.moodTracker.domain.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor(staticName = "of")
public class CommonResponseDTO<T> {
	
	private final String resultCode;
    private final String message;

}
