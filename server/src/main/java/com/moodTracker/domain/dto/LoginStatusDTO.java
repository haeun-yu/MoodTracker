package com.moodTracker.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginStatusDTO {
	private boolean loggedIn;
	private int userSeq;
	private String userName;
	private String Message;
}
