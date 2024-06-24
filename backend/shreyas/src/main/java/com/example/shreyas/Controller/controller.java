package com.example.shreyas.Controller;


import com.example.shreyas.entity.product;
import com.example.shreyas.repository.productrepository;
import com.example.shreyas.service.productservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class controller {

@Autowired
    private productservice service;
@Autowired
    private productrepository repository;
@GetMapping("/product")
    public List<product>getallproduct(){
    return service.getallproducts();
}
@PostMapping("/product")
    public product addproduct(@RequestBody product request){
        return service.addproduct(request);
}

@DeleteMapping("/{id}")
    public void deleterequest (@PathVariable Long id){
    Optional<product> productOptional=repository.findById(id);
    product product=productOptional.get();
    repository.delete(product);
}

@PutMapping("/{id}")
    public ResponseEntity<?>updateproduct(@PathVariable Long id ,@RequestBody product updatedRequest){
    try {
        product updated=service.updateproduct(id,updatedRequest);
        return ResponseEntity.ok(updated);
    }
    catch (ResponseStatusException e){
        return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
    }
}
}
