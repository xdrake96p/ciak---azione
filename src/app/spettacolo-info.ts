import { Time } from "@angular/common";

export class SpettacoloInfo {

    constructor(spettacolo: any ) {
        this.id_spettacolo = spettacolo.id_spettacolo
        this.dataSpettacolo = spettacolo.dataSpettacolo
        this.orario = spettacolo.orario
        this.prezzoSpettacolo = spettacolo.prezzoSpettacolo
    }
    private id_spettacolo: number;
    private dataSpettacolo: Date;
    private orario: Time;
    private prezzoSpettacolo: number;

    public getId_spettacolo(): number {
        return this.id_spettacolo;
    }

    public setId_spettacolo(id_spettacolo: number): void {
        this.id_spettacolo = id_spettacolo;
    }

    public getDataSpettacolo(): Date {
        return this.dataSpettacolo;
    }

    public setDataSpettacolo(dataSpettacolo: Date): void {
        this.dataSpettacolo = dataSpettacolo;
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

}
