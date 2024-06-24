package com.example.shreyas.Controller;


import com.example.shreyas.entity.user;
import com.example.shreyas.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class login{

    @Autowired
    private userservice userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody user user1) {
        Optional<user> authenticatedUser = userService.authenticate(user1.getemail(), user1.getPassword());
        if (authenticatedUser.isPresent()) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
    @PostMapping( "/add")
    public String addUser(@RequestBody user user){
        userService.addUser(user);

        return "succufully done";
    }
}
