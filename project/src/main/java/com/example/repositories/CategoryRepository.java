package com.example.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entities.CategoryMaster;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<CategoryMaster, Integer> {
    
    
    List<CategoryMaster> findByCatName(String catName); 
    
    @Query("SELECT c FROM CategoryMaster c WHERE c.catId = :catId") 
    List<CategoryMaster> findByCatId(@Param("catId") String catId); 
    
    @Query("SELECT cm FROM CategoryMaster cm WHERE cm.subCatId IS NULL AND cm.flag = false")
    List<CategoryMaster> findAllcatagory();
    
    @Query("SELECT cm FROM CategoryMaster cm WHERE cm.subCatId IS NULL AND cm.flag = true")
    List<CategoryMaster> findAlloffer();
    
    @Query("SELECT c FROM CategoryMaster c Where c.subCatId= :catId ")    
    List<CategoryMaster> findBySubCatId(@Param("catId") String catId);
    
    
}
