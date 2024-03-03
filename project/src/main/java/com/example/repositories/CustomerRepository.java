package com.example.repositories;

import com.example.entities.Customer;

import jakarta.transaction.Transactional;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // You can define additional query methods if needed
	
	
	@Query(value="select * from customers where email=:name and password=:password",nativeQuery=true)
	Optional<Customer> findByUserNameAndPassword(String name,String password);
}
