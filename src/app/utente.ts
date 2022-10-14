export class Utente {
    id_utente : number;
	  nome : string;
	  cognome : string;
	  dataDiNascita : Date;
	  email : string;
	
     constructor(utente: any){
        this.id_utente=utente.id_utente;
        this.nome=utente.nome;
        this.cognome=utente.cognome;
        this.dataDiNascita=utente.dataDiNascita;
        this.email=utente.email;
     }

     public getNome():string{
        return this.nome;
     }
     public getCognome():string{
        return this.cognome;
     }
     public getDatadiNascita():Date{
        return this.dataDiNascita;
     }
     public getEmail():string{
        return this.email;
     }
}
