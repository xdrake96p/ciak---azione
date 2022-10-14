export class Results {
    private original_title:string;
    private poster_path: string;
    private vote_average : number;
    private id: number;

    constructor(risultato:any){
        this.original_title=risultato.original_title;
        this.poster_path=risultato.poster_path;
        this.vote_average=risultato.vote_average;
        this.id=risultato.id;
    }

    public aposter_path():string{
        return `https://image.tmdb.org/t/p/w500${this.poster_path}`;
    }
    public getTitolo():string{
        return this.original_title;
    }
    public avote_average():number{
        return this.vote_average;
    }
    public aid():number{
        return this.id;
    }

}
