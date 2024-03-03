package com.example.repositories;

import com.example.entities.ConfigMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigMasterRepository extends JpaRepository<ConfigMaster, Integer> {
    // You can add custom query methods here if needed
}
