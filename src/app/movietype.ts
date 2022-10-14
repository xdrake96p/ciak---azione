import { Results } from "./results";

export class Movietype {
    private results: Results[] ;

    constructor(risultato: any) {
        //console.log("risultato in costruttore "+ JSON.stringify(risultato));
        this.results=[];
        for (let i in risultato.results){
           // console.log(risultato.results);
            this.results.push(new Results(risultato.results[i]));
            
        }
        
    }
    public getRisultato(): any {
       return this.results;
    }
}
