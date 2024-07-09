package com.moodTracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.moodTracker.domain.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    boolean existsByEmail(String email);
    boolean existsByUserName(String userName);
    Optional<User> findByEmail(String email);
    Optional<User> findByUserSeq(Integer userSeq);

}
