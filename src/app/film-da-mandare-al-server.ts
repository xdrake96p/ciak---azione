import { Time } from "@angular/common";

export class FilmDaMandareAlServer {



  constructor(   id: number,     data: Date,     orario: Time,     sala: string,     prezzoBiglietto: number) {
    this.id = id
    this.data = data
    this.orario = orario
    this.sala = sala
    this.prezzoBiglietto = prezzoBiglietto
  }
   private id:number;
    private data:Date;
    private orario:Time;
	private  sala : string;
	private  prezzoBiglietto : number;


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getOrario(): Time {
        return this.orario;
    }

    public setOrario(orario: Time): void {
        this.orario = orario;
    }

    public getSala(): string {
        return this.sala;
    }

    public setSala(sala: string): void {
        this.sala = sala;
    }

    public getPrezzoBiglietto(): number {
        return this.prezzoBiglietto;
    }

    public setPrezzoBiglietto(prezzoBiglietto: number): void {
        this.prezzoBiglietto = prezzoBiglietto;
    }


}
