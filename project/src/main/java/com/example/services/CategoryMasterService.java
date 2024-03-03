package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.example.entities.CategoryMaster;
import com.example.repositories.CategoryRepository;

import java.util.List;

@Service
public class CategoryMasterService {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    public CategoryMaster createOrUpdate(CategoryMaster category) {
        return categoryRepository.save(category);
    }
    
    public CategoryMaster getById(int id) {
        return categoryRepository.findById(id).orElse(null);
    }
    
    public void delete(int id) {
        categoryRepository.deleteById(id);
    }
    
    public List<CategoryMaster> getAllCategories() {
        return categoryRepository.findAllcatagory();
    }
    
    public List<CategoryMaster> getAllOffer() {
        return categoryRepository.findAlloffer();
    }
    
    public List<CategoryMaster> findByCatID(@Param("Cat_id") int Cat_ID)
    {
    	return categoryRepository.findAll(); 
    }
    public List<CategoryMaster> findBySubCatId(String catId) {
        return categoryRepository.findBySubCatId(catId);
    }
}
