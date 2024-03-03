package com.example.services;


import com.example.entities.ProdDtlMaster;

import java.util.List;

public interface ProdDtlMasterService {
    ProdDtlMaster saveProdDtl(ProdDtlMaster prodDtlMaster);

    ProdDtlMaster getProdDtlById(int id);

    List<ProdDtlMaster> getAllProdDtls();

    void deleteProdDtlById(int id);
}