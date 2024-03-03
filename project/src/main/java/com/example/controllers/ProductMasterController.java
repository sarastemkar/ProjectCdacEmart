package com.example.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entities.ProductMaster;
import com.example.services.ProductMasterService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/public/api/products")
public class ProductMasterController {

 
    private ProductMasterService productMasterService;
    
    @Autowired
    public ProductMasterController(ProductMasterService productMasterService) {
        this.productMasterService = productMasterService;
    }

    @PostMapping("/")
    public ProductMaster createProduct(@RequestBody ProductMaster product) {
        return productMasterService.createOrUpdateProduct(product);
    }

    @GetMapping("/{id}")
    public ProductMaster getProductById(@PathVariable Long id) {
        return productMasterService.getProductById(id);
    }

    @GetMapping("/")
    public List<ProductMaster> getAllProducts() {
        return productMasterService.getAllProducts();
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productMasterService.deleteProduct(id);
    }
}

