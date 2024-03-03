package com.example.services;

import com.example.entities.ProdDtlMaster;
import com.example.repositories.ProdDtlMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdDtlMasterServiceImpl implements ProdDtlMasterService {

    @Autowired
    private ProdDtlMasterRepository prodDtlMasterRepository;

    @Override
    public ProdDtlMaster saveProdDtl(ProdDtlMaster prodDtlMaster) {
        return prodDtlMasterRepository.save(prodDtlMaster);
    }

    @Override
    public ProdDtlMaster getProdDtlById(int id) {
        Optional<ProdDtlMaster> optionalProdDtlMaster = prodDtlMasterRepository.findById(id);
        return optionalProdDtlMaster.orElse(null);
    }

    @Override
    public List<ProdDtlMaster> getAllProdDtls() {
        return prodDtlMasterRepository.findAll();
    }

    @Override
    public void deleteProdDtlById(int id) {
        prodDtlMasterRepository.deleteById(id);
    }
}