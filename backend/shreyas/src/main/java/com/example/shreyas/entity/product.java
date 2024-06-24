package com.example.shreyas.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity

public class product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String product_name;
    private String image;
    private Integer price;

    @Override
    public String toString() {
        return "product{" +
                "id=" + id +
                ", product_name='" + product_name + '\'' +
                ", image='" + image + '\'' +
                ", price=" + price +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
