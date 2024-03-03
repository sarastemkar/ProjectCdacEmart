package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entities.CategoryMaster;
import com.example.services.CategoryMasterService;
import com.example.services.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/public/api/categories")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryMasterController {
    
    
    private CategoryMasterService categoryMasterService;
    
    @Autowired
    public CategoryMasterController(CategoryMasterService categoryMasterService) {
        this.categoryMasterService = categoryMasterService;
    }

    
    @PostMapping("/")
    public CategoryMaster createCategory(@RequestBody CategoryMaster category) {
        return categoryMasterService.createOrUpdate(category);
    }
    
    @GetMapping("/{id}")
    public CategoryMaster getCategoryById(@PathVariable int id) {
        return categoryMasterService.getById(id);
    }
    
    @GetMapping("/")
    public List<CategoryMaster> getAllCategories() {
        return categoryMasterService.getAllCategories();
    }
    
    @GetMapping("/Home")
    public List<CategoryMaster> getOffers() {
        return categoryMasterService.getAllOffer();
    }
    
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable int id) {
        categoryMasterService.delete(id);
    }
    
    @GetMapping("/sub/{catId}")
    public List<CategoryMaster> findBySubCatId(@PathVariable String catId) {
        return categoryMasterService.findBySubCatId(catId);
    }
}
