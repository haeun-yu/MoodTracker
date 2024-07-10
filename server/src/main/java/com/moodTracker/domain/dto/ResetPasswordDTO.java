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
	private String email;
	private String currentPassword;
	private String newPassword;
}
