package com.example.controllers;


import com.example.entities.ProdDtlMaster;
import com.example.services.ProdDtlMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("public/api/proddtl")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdDtlMasterController {

    @Autowired
    private ProdDtlMasterService prodDtlMasterService;

    @PostMapping("/add")
    public ResponseEntity<ProdDtlMaster> addProdDtl(@RequestBody ProdDtlMaster prodDtlMaster) {
        ProdDtlMaster savedProdDtl = prodDtlMasterService.saveProdDtl(prodDtlMaster);
        return new ResponseEntity<>(savedProdDtl, HttpStatus.CREATED);
    }

    @GetMapping("/prod/{id}")
    public ResponseEntity<ProdDtlMaster> getProdDtlById(@PathVariable("id") int id) {
        ProdDtlMaster prodDtlMaster = prodDtlMasterService.getProdDtlById(id);
        if (prodDtlMaster != null) {
            return new ResponseEntity<>(prodDtlMaster, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProdDtlMaster>> getAllProdDtls() {
        List<ProdDtlMaster> prodDtlMasters = prodDtlMasterService.getAllProdDtls();
        return new ResponseEntity<>(prodDtlMasters, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProdDtlById(@PathVariable("id") int id) {
        prodDtlMasterService.deleteProdDtlById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}