package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.ProductMaster;
import com.example.repositories.ProductMasterRepository;

import java.util.List;

@Service
public class ProductMasterService {

    @Autowired
    private ProductMasterRepository productMasterRepository;

    public ProductMaster createOrUpdateProduct(ProductMaster product) {
        return productMasterRepository.save(product);
    }

    public ProductMaster getProductById(Long id) {
        return productMasterRepository.findById(id).orElse(null);
    }

    public List<ProductMaster> getAllProducts() {
        return productMasterRepository.findAll();
    }

    public void deleteProduct(Long id) {
        productMasterRepository.deleteById(id);
    }
}
