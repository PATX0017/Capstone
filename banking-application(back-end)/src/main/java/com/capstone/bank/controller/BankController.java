package com.capstone.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	@CrossOrigin(origins="*")
	public BankAccount getAccount(@PathVariable(value = "accountNumber") Long accountNumber) {
		return service.getBankAccount(accountNumber);
	}
	@GetMapping("/accounts")
	@CrossOrigin(origins="*")
	public List<BankAccount> getAllAccounts() {
		return service.getAllBankAccounts();
	}
	
	@PostMapping("/add_account")
	@CrossOrigin(origins="*")
	public BankAccount addAccount(@RequestBody BankAccount bankAccount) {
		return service.addBankAccount(bankAccount);
	}
	
	@PatchMapping("/deposit_checkings/{amount}")
	@CrossOrigin(origins="*")
	public BankAccount depositCheckings( @PathVariable(value="amount") Long amount, @RequestBody BankAccount bankAccount) {
		return service.depositCheckingsAcc(amount, bankAccount);
	}
	
	@PatchMapping("/deposit_savings/{amount}")
	@CrossOrigin(origins="*")
	public BankAccount depositSavings9(@PathVariable(value="amount") Long amount, @RequestBody BankAccount bankAccount) {
		return service.depositSavingsAcc(amount, bankAccount);
	}
	
	@PatchMapping("/withdraw_checkings/{amount}")
	@CrossOrigin(origins="*")
	public BankAccount withdrawCheckings(@PathVariable(value="amount") Long amount, @RequestBody BankAccount bankAccount) {
		return service.withdrawCheckingsAcc(amount, bankAccount);
	}
	
	@PatchMapping("/withdraw_savings/{amount}")
	@CrossOrigin(origins="*")
	public BankAccount withdrawSavings(@PathVariable(value="amount") Long amount, @RequestBody BankAccount bankAccount) {
		return service.withdrawSavingsAcc(amount, bankAccount);
	}
	
}
