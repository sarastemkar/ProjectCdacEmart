package com.example.entities;
import jakarta.persistence.*;

@Entity
@Table(name = "category_master")
public class CategoryMaster {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int catMasterId;
    
    private String catId;
    private String subCatId;
    private String catName;
    private String catImagePath;
    private boolean flag;
    
    public int getCatMasterId() {
		return catMasterId;
	}
	public void setCatMasterId(int catMasterId) {
		this.catMasterId = catMasterId;
	}
	public String getCatId() {
		return catId;
	}
	public void setCatId(String catId) {
		this.catId = catId;
	}
	public String getSubCatId() {
		return subCatId;
	}
	public void setSubCatId(String subCatId) {
		this.subCatId = subCatId;
	}
	public String getCatName() {
		return catName;
	}
	public void setCatName(String catName) {
		this.catName = catName;
	}
	public String getCatImagePath() {
		return catImagePath;
	}
	public void setCatImagePath(String catImagePath) {
		this.catImagePath = catImagePath;
	}
	public boolean isFlag() {
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	
    // Getters and Setters
}
