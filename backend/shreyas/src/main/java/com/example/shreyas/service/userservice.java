package com.example.shreyas.service;


import com.example.shreyas.entity.user;
import com.example.shreyas.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.Optional;

@Service
public class userservice {

    @Autowired
    private userrepository userRepository;

    public Optional<user> authenticate(String email, String password) {
        Optional<user> userOpt = userRepository.findByemail(email);
        if (userOpt.isPresent()) {
            user user = userOpt.get();
            if (user.getPassword().equals(password)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }

    public void addUser(user user) {
        userRepository.save(user);

    }
}
