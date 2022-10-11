package com.example.Movie.EntitaDB;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Spettacolo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private Date dataSpettacolo;
	private Time orario;
	
	//relazione utente * 1 
	
	
	//relazione film * 1 
	
	//relazione con sala 1 *
	
	//relazione Coupon 1 a 1
	
	//relazione storico * *
	
}
