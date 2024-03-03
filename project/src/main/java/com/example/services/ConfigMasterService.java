package com.example.services;

import com.example.entities.ConfigMaster;

import java.util.List;

public interface ConfigMasterService {
    List<ConfigMaster> getAllConfigMasters();
    ConfigMaster getConfigMasterById(int configId);
    ConfigMaster saveConfigMaster(ConfigMaster configMaster);
    void deleteConfigMaster(int configId);
}
