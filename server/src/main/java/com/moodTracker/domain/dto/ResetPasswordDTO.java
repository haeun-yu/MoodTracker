package com.moodTracker.domain.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResetPasswordDTO {
	
	private int userSeq;
	private String currentPassword;
	private String newPassword;
	
	//이메일 인증시 사용
	private String email;
}
