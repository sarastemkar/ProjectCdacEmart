package com.example.controllers;

import com.example.demo.JwtResponse;
import com.example.entities.Customer;
import com.example.repositories.CustomerRepository;
import com.example.services.CustomUserDetailsService;
import com.example.services.CustomerService;
import com.example.services.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("public/api/customers")
public class CustomerController {

    //private final CustomerService customerService;
    
    @Autowired
    private JwtUtil jwtutil;
    
    @Autowired
    private CustomerRepository customerRepository;
    
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private CustomerService customerService;
    

    @GetMapping("/getAllCustomers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        return ResponseEntity.ok(customers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Customer customer = customerService.getCustomerById(id);
        if (customer != null) {
            return ResponseEntity.ok(customer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Customer> createCustomer( @RequestBody Customer customer) {
        Customer createdCustomer = customerService.createCustomer(customer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id,  @RequestBody Customer customer) {
        Customer updatedCustomer = customerService.updateCustomer(id, customer);
        if (updatedCustomer != null) {
            return ResponseEntity.ok(updatedCustomer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        boolean deleted = customerService.deleteCustomer(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/token")
    public ResponseEntity<?> generateToken(@RequestBody Customer customer) {
        try {
            System.out.println("Inside token method");
            System.out.println(customer);
            Optional<Customer> user = customerRepository.findByUserNameAndPassword(customer.getEmail(), customer.getPassword());
            System.out.println("User is present?" + user.isPresent());
            if (user.isEmpty()) {
                throw new UsernameNotFoundException("Credentials don't match");
            }
            customUserDetailsService.setPassword(customer.getPassword());
            UserDetails userDetails = customUserDetailsService.loadUserByUsername(customer.getEmail());
            String token = jwtutil.generateToken(userDetails,user.get());
            System.out.println("JWT " + token);
            return ResponseEntity.ok(new JwtResponse(token));
        } catch (Exception ee) {
            ee.printStackTrace();
            return null;
        }
    }
}
