package com.capstone.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.bank.model.BankAccount;

@Repository
public interface BankRepository extends JpaRepository<BankAccount, Long> {
	
}
