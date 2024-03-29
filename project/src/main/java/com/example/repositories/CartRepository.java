package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Cart;

import jakarta.transaction.Transactional;


@Repository
@Transactional
public interface CartRepository extends JpaRepository<Cart,Integer> {

	@Query(value = "SELECT * FROM Cart c WHERE c.CustID = :custID", nativeQuery = true)
    List<Cart> findProdByCustID(@Param("custID") int custID);
	
	@Modifying
	@Query(value = "UPDATE Cart c SET c.Qty = :newQty WHERE c.Cart_ID = :cartId", nativeQuery = true)
	void UpdateQty(@Param("newQty") int QT,@Param("cartId") int cid );
	
	
	@Modifying
	@Query(value = "DELETE FROM Cart WHERE custid = :cid", nativeQuery = true)
	void DeletecartByCust (@Param("cid") int cid);
	
	
}
