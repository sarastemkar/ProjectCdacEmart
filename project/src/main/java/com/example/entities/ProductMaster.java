package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Product_Master")
public class ProductMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Prod_id")
    private Long id;

    @Column(name = "Catmaster_id")
    private Long categoryId;

    @Column(name = "Prod_short_desc")
    private String shortDescription;

    @Column(name = "Prod_Long_Desc", columnDefinition = "TEXT")
    private String longDescription;

    @Column(name = "MRP_Price")
    private double mrpPrice;

    @Column(name = "Cardholders_price")
    private double cardholdersPrice;

    @Column(name = "Points_tobe_redm")
    private int pointsToBeRedeemed;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getLongDescription() {
		return longDescription;
	}

	public void setLongDescription(String longDescription) {
		this.longDescription = longDescription;
	}

	public double getMrpPrice() {
		return mrpPrice;
	}

	public void setMrpPrice(double mrpPrice) {
		this.mrpPrice = mrpPrice;
	}

	public double getCardholdersPrice() {
		return cardholdersPrice;
	}

	public void setCardholdersPrice(double cardholdersPrice) {
		this.cardholdersPrice = cardholdersPrice;
	}

	public int getPointsToBeRedeemed() {
		return pointsToBeRedeemed;
	}

	public void setPointsToBeRedeemed(int pointsToBeRedeemed) {
		this.pointsToBeRedeemed = pointsToBeRedeemed;
	}

    
    // Getters and setters
    // Constructors
    // Other methods
}
