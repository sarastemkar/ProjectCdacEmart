package com.example.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entities.Customer;
import com.example.entities.ProductMaster;

@Repository
public interface ProductMasterRepository extends JpaRepository<ProductMaster, Long> {
    // Add custom query methods if needed
	
	@Query(value="select * from product_master where catmaster_id=:id",nativeQuery=true)
	Optional<ProductMaster> findById(Long id);
}
