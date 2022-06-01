package com.capstone.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.bank.model.BankAccount;
import com.capstone.bank.service.BankService;

@RestController
@RequestMapping("")
public class BankController {
	@Autowired
	BankService service;
	
	@GetMapping("/account/{accountNumber}")
	@ResponseBody
	public BankAccount getAccount(@PathVariable(value = "accountNumber") Long accountNumber) {
		return service.getBankAccount(accountNumber);
	}
	@GetMapping("/accounts")
	public List<BankAccount> getAllAccounts() {
		return service.getAllBankAccounts();
	}
	
	@PostMapping("/add_account")
	public BankAccount addAccount(@RequestBody BankAccount bankAccount) {
		return service.addBankAccount(bankAccount);
	}
}
