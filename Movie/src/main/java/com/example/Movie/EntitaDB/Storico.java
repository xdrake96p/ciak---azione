package com.example.Movie.EntitaDB;

import java.math.BigDecimal;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Storico {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String NomeSala;
	private String NomeFilm;
	private int posto;
	private BigDecimal prezzo;
	private Time orario;

	enum TipoPagamento {
		Contati, Carta, Online
	};

	// relazione con utente * 1

	// relazione con spettacolo * *

}
