package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Prod_Dtl_Master")
public class ProdDtlMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prod_dtl_id")
    private int prodDtlId;

    @Column(name = "prod_id")
    private int prodId;

    @Column(name = "config_id")
    private int configId;

    @Column(name = "config_dtls")
    private String configDetails;

    // Default constructor
    public ProdDtlMaster() {
    }

    // Parameterized constructor
    public ProdDtlMaster(int prodDtlId, int prodId, int configId, String configDetails) {
        this.prodDtlId = prodDtlId;
        this.prodId = prodId;
        this.configId = configId;
        this.configDetails = configDetails;
    }

    // Getters and setters
    public int getProdDtlId() {
        return prodDtlId;
    }

    public void setProdDtlId(int prodDtlId) {
        this.prodDtlId = prodDtlId;
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public int getConfigId() {
        return configId;
    }

    public void setConfigId(int configId) {
        this.configId = configId;
    }

    public String getConfigDetails() {
        return configDetails;
    }

    public void setConfigDetails(String configDetails) {
        this.configDetails = configDetails;
    }
}
