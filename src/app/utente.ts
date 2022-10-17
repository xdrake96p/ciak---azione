export class Utente {

 
 
	private  nome : string;
	private  cognome : string;
	private  dataDiNascita : Date;
	private  email : string;
    private  password:string 
    private Tipo_Utente:string;

   constructor( utente:any ) {
        
        this.nome = utente.get("nome").value;
        this.cognome = utente.get("cognome").value;
        this.dataDiNascita = utente.get("dataDiNascita").value;
        this.email = utente.get("email").value;
        this.password = utente.get("password").value;
        this.Tipo_Utente="Registrato";
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

