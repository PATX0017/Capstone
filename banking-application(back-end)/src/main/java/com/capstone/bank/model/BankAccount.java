package com.capstone.bank.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accounts")
public class BankAccount {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "account_number")
	private Long accountNumber;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "checkings_balance")
	private Long checkingsBalance;

	@Column(name = "savings_balance")
	private Long savingsBalance;
	
	public BankAccount() {
		
		this.checkingsBalance = (long) 0;
		this.savingsBalance = (long) 0;
	}

	public Long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Long getCheckingsBalance() {
		return checkingsBalance;
	}

	public void setCheckingsBalance(Long checkingsBalance) {
		this.checkingsBalance = checkingsBalance;
	}

	public Long getSavingsBalance() {
		return savingsBalance;
	}

	public void setSavingsBalance(Long savingsBalance) {
		this.savingsBalance = savingsBalance;
	}


	

	


	
}
