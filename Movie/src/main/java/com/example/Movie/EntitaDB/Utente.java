package com.example.Movie.EntitaDB;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Utente {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String nome;
	private String cognome;
	private Date dataDiNascita;
	private String email;
	private String password;
	enum TipoUtente{Registrato,Admin,nonRegistrato};
	
	//relazione con spettacolo 1 *
	
	//relazione coupon * *
}
