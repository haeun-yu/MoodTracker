package com.moodTracker.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.moodTracker.domain.UserRole;
import com.moodTracker.domain.entity.User;

import jakarta.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class JoinFormDTO {

    //form의 필드명과 일치해야 함
    @NotBlank(message = "로그인 아이디가 비어있습니다.")
    private String email;

    @NotBlank(message = "비밀번호가 비어있습니다.")
    private String password;

    @NotBlank(message = "닉네임이 비어있습니다.")
    private String userName;

    public User toEntity() {
        return User.builder()
                .email(this.email)
                .password(this.password)
                .userName(this.userName)
                .role(UserRole.USER)
                .build();
    }
}
