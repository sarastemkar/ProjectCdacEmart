package com.example.entities;

import jakarta.persistence.*;

@Entity
public class ConfigMaster {

    @Id
    @Column(columnDefinition = "INTEGER")
    private int configId;

    private String configName;

    // Default constructor
    public ConfigMaster() {
    }

    // Parameterized constructor
    public ConfigMaster(int configId, String configName) {
        this.configId = configId;
        this.configName = configName;
    }

    // Getter and setter methods
    public int getConfigId() {
        return configId;
    }

    public void setConfigId(int configId) {
        this.configId = configId;
    }

    public String getConfigName() {
        return configName;
    }

    public void setConfigName(String configName) {
        this.configName = configName;
    }

    // toString method for easy debugging
    @Override
    public String toString() {
        return "ConfigMaster{" +
                "configId=" + configId +
                ", configName='" + configName + '\'' +
                '}';
    }
}
