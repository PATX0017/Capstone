package com.capstone.bank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.bank.model.BankAccount;
import com.capstone.bank.repository.BankRepository;

@Service
public class BankService {
	
	@Autowired
	BankRepository repository;
	
	public BankAccount getBankAccount(Long accountNumber) {
		return repository.findById(accountNumber).get();
	
	}
	
	public List<BankAccount> getAllBankAccounts() {
		return repository.findAll();
	}
	
	public BankAccount addBankAccount(BankAccount bankAccount) {
		return repository.save(bankAccount);
	}

	

}
