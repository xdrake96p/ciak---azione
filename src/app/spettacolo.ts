import { Time } from "@angular/common";
import { Film } from "./film";
import { Movietype } from "./movietype";

export class Spettacolo {


    private dataSpettacolo: Date;
    private film: Film;

    public getFilm(): any {
        return this.film.getNomeFilm();
    }

  

    private id_spettacolo: number;
    private orario: Time;
    private prezzoSpettacolo: number;


    public getDataSpettacolo(): Date {
        return this.dataSpettacolo;
    }

    public setDataSpettacolo(dataSpettacolo: Date): void {
        this.dataSpettacolo = dataSpettacolo;
    }

   

    public getId_spettacolo(): number {
        return this.id_spettacolo;
    }

    public setId_spettacolo(id_spettacolo: number): void {
        this.id_spettacolo = id_spettacolo;
    }

    public getOrario(): Time {
        return this.orario;
    }

    public setOrario(orario: Time): void {
        this.orario = orario;
    }

    public getPrezzoSpettacolo(): number {
        return this.prezzoSpettacolo;
    }

    public setPrezzoSpettacolo(prezzoSpettacolo: number): void {
        this.prezzoSpettacolo = prezzoSpettacolo;
    }

    constructor(spettacolo: any) {
      
        this.dataSpettacolo = spettacolo.dataSpettacolo;
        this.film = new Film(spettacolo.film);
        this.id_spettacolo = spettacolo.id_spettacolo
        this.orario = spettacolo.orario
        this.prezzoSpettacolo = spettacolo.prezzoSpettacolo
    }
 
 
}