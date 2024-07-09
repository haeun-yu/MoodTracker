package com.moodTracker.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.moodTracker.domain.dto.JoinFormDTO;
import com.moodTracker.domain.dto.LoginFormDTO;
import com.moodTracker.domain.dto.ResetPasswordDTO;
import com.moodTracker.domain.entity.User;
import com.moodTracker.repository.UserRepository;

import jakarta.validation.Valid;

import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    /**
     * loginId 중복 체크
     * 회원가입 기능 구현 시 사용
     * 중복되면 true return
     */
    public boolean checkLoginIdDuplicate(String loginId) {
        return userRepository.existsByEmail(loginId);
    }

    /**
     * nickname 중복 체크
     * 회원가입 기능 구현 시 사용
     * 중복되면 true return
     */
    public boolean checkNicknameDuplicate(String nickname) {
        return userRepository.existsByUserName(nickname);
    }

    /**
     * 회원가입 기능
     * 화면에서 JoinForm(loginId, password, nickname)을 입력받아 User로 변환 후 저장
     * loginId, nickname 중복 체크는 Controller에서 진행 => 에러 메세지 출력을 위해
     */
    // 회원가입 기능 => 화면에서 JoinForm을 입력받아 User로 변환 후 DB에 저장
    public void join(JoinFormDTO form) {
        userRepository.save(form.toEntity());
    }

    /**
     *  로그인 기능
     *  화면에서 LoginForm(loginId, password)을 입력받아 loginId와 password가 일치하면 User return
     *  loginId가 존재하지 않거나 password가 일치하지 않으면 null return
     */
    public User login(LoginFormDTO form) {
        Optional<User> optionalUser = userRepository.findByEmail(form.getEmail());

        // loginId와 일치하는 User가 없으면 null return
        if(optionalUser.isEmpty()) {
            return null;
        }

        User user = optionalUser.get();

        // 찾아온 User의 password와 입력된 password가 다르면 null return
        if(!user.getPassword().equals(form.getPassword())) {
            return null;
        }

        return user;
    }

    /**
     * 사용자 조회(userSeq 이용)
     * 인증, 인가 시 사용
     * userId가 null이거나(로그인 X) userId로 찾아온 User가 없으면 null return
     * userId로 찾아온 User가 존재하면 User return
     */
    public User getLoginUser(Integer userSeq) {
        if(userSeq == null) return null;

        Optional<User> optionalUserSeq = userRepository.findByUserSeq(userSeq);
        
        if(optionalUserSeq.isEmpty()) {
        	return null;
        	}
        
        return optionalUserSeq.get();
    }
    
    /**
     * 회원 탈퇴
     * @param userSeq
     * @return
     */
    public void withdrawUser(Integer userSeq) {
    	Optional<User> optionalUserSeq = userRepository.findByUserSeq(userSeq);
    	userRepository.delete(optionalUserSeq.get());
    	
    }

    /**
     * 패스워드 변경 
     * @param ResetPasswordDTO(currentPassword, newPassword)
     * @return
     */
	public void reset(ResetPasswordDTO resetPasswordDTO) {
        Optional<User> optionalUser = userRepository.findByUserSeq(resetPasswordDTO.getUserSeq());
        User user = optionalUser.get();
        user.setPassword(resetPasswordDTO.getNewPassword());
        userRepository.save(user);
	}
}
