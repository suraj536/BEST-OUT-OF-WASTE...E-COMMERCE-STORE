package com.example.shreyas.service;

import com.example.shreyas.entity.product;
import com.example.shreyas.repository.productrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@Service

public class productservice {
    @Autowired
 private productrepository repository;
  public product addproduct(product request){
      return repository.save(request);
  }

  public List<product> getallproducts(){
      return repository.findAll();
  }

  public product updateproduct(Long id,product updatedRequest){
      return repository.findById(id).map(product->{
          product.setProduct_name(updatedRequest.getProduct_name());
          product.setImage(updatedRequest.getImage());
          product.setPrice(updatedRequest.getPrice());
          return repository.save(product);
      }).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Product Not Found."));
  }

}
