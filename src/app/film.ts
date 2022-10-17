import { Time } from "@angular/common";

export class Film {

  constructor(  film:any) {
    this.descrizione = film.descrizione;
    this.durataFilm =film.durataFilm;
    this.id = film.id;
    this.idFilmApi =film.idFilmApi;
    this.locandina = film.locandina;
    this.nomeFilm = film.nomeFilm;
  }
   private  descrizione: string;

   private  durataFilm: Time;

   private id: number;

   private  idFilmApi: number;

   private  locandina: string;

   private  nomeFilm: string;

    public getDescrizione(): string {
        return this.descrizione;
    }

    public setDescrizione(descrizione: string): void {
        this.descrizione = descrizione;
    }

    public getDurataFilm(): Time {
        return this.durataFilm;
    }

    public setDurataFilm(durataFilm: Time): void {
        this.durataFilm = durataFilm;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getIdFilmApi(): number {
        return this.idFilmApi;
    }

    public setIdFilmApi(idFilmApi: number): void {
        this.idFilmApi = idFilmApi;
    }

    public getLocandina(): string {
        return this.locandina;
    }

    public setLocandina(locandina: string): void {
        this.locandina = locandina;
    }

    public getNomeFilm(): string {
        return this.nomeFilm;
    }

    public setNomeFilm(nomeFilm: string): void {
        this.nomeFilm = nomeFilm;
    }


}
