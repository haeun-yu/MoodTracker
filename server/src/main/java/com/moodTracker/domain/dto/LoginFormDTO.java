package com.moodTracker.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginFormDTO {

    private String email;
    private String password;

}
