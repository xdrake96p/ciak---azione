export class Utente {

 
 
	private  nome : string;
	private  cognome : string;
	private  dataDiNascita : Date;
	private  email : string;
    private  password:string 
    private tipoUtente:string;

    public getTipoUtente(): string {
        return this.tipoUtente;
    }

    public setTipoUtente(tipoUtente: string): void {
        this.tipoUtente = tipoUtente;
    }


   constructor( utente:any ) {
        console.log("utente cost"+JSON.stringify(utente));
        this.nome = utente.nome;
        this.cognome = utente.cognome;
        this.dataDiNascita = utente.dataDiNascita;
        this.email = utente.email;
        this.password = utente.password;
        this.tipoUtente=utente.tipoUtente;
      }

   
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCognome(): string {
        return this.cognome;
    }

    public setCognome(cognome: string): void {
        this.cognome = cognome;
    }

    public getDataDiNascita(): Date {
        return this.dataDiNascita;
    }

    public setDataDiNascita(dataDiNascita: Date): void {
        this.dataDiNascita = dataDiNascita;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }



}

