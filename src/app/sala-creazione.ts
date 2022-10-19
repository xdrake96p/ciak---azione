export class SalaCreazione {

  constructor(form:any) {
    this.nome = form.nome
    this.numerSala = form.numerSala
  }
    private nome:string;
    private numerSala : number;


    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNumerSala(): number {
        return this.numerSala;
    }

    public setNumerSala(numerSala: number): void {
        this.numerSala = numerSala;
    }

}
