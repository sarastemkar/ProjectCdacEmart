package com.example.services;

import com.example.entities.Customer;
import com.example.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

	
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        return optionalCustomer.orElse(null);
    }

    public Customer createCustomer(Customer customer) {
        // You can implement additional logic here (e.g., validation) before saving the customer
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customer) {
        Optional<Customer> optionalExistingCustomer = customerRepository.findById(id);
        if (optionalExistingCustomer.isPresent()) {
            Customer existingCustomer = optionalExistingCustomer.get();
            // Update existing customer fields
            existingCustomer.setFirst(customer.getFirst());
            existingCustomer.setLast(customer.getLast());
            existingCustomer.setPhonenumber(customer.getPhonenumber());
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setPassword(customer.getPassword());
            
            // Save and return updated customer
            return customerRepository.save(existingCustomer);
        } else {
            return null; // Customer with given id not found
        }
    }

    public boolean deleteCustomer(Long id) {
        if (customerRepository.existsById(id)) {
            customerRepository.deleteById(id);
            return true; // Customer successfully deleted
        } else {
            return false; // Customer with given id not found
        }
    }
}
