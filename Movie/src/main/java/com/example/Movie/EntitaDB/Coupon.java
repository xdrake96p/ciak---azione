package com.example.Movie.EntitaDB;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Coupon {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String CodiceCoupon;
	private Integer PercentualeSconto;
	
	//relazione utente * *
	
	
	//relazione spettacolo 1 1
}
