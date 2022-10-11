package com.example.Movie.EntitaDB;

import java.sql.Time;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
public class Film {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String nomeFilm;
	private String Descrizione;
	private Time DurataFilm;
	private String locandina;
	private String trailer;
	
	
	//relazione 1 * per film
}
