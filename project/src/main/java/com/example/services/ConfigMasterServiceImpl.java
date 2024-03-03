package com.example.services;

import com.example.entities.ConfigMaster;
import com.example.repositories.ConfigMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConfigMasterServiceImpl implements ConfigMasterService {

    private final ConfigMasterRepository configMasterRepository;

    @Autowired
    public ConfigMasterServiceImpl(ConfigMasterRepository configMasterRepository) {
        this.configMasterRepository = configMasterRepository;
    }

    @Override
    public List<ConfigMaster> getAllConfigMasters() {
        return configMasterRepository.findAll();
    }

    @Override
    public ConfigMaster getConfigMasterById(int configId) {
        Optional<ConfigMaster> optionalConfigMaster = configMasterRepository.findById(configId);
        return optionalConfigMaster.orElse(null);
    }

    @Override
    public ConfigMaster saveConfigMaster(ConfigMaster configMaster) {
        return configMasterRepository.save(configMaster);
    }

    @Override
    public void deleteConfigMaster(int configId) {
        configMasterRepository.deleteById(configId);
    }
}
