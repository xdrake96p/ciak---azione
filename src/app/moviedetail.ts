export class Moviedetail {
    private id: number;
    private budget: number;
    private backdrop_path : string;
    private original_title : string;
    private overview : string;
    private poster_path: string;
    private runtime:  number;
    private vote_average : number;
    private revenue : number;
    
    constructor(moviedetail: any){
        this.id=moviedetail.id;
        this.budget=moviedetail.budget;
        this.backdrop_path=moviedetail.backdrop_path;
        this.original_title=moviedetail.original_title;
        this.overview=moviedetail.overview;
        this.poster_path=moviedetail.poster_path;
        this.runtime=moviedetail.runtime;
        this.vote_average=moviedetail.vote_average;
        this.revenue=moviedetail.revenue;
    }

    public getId() : number{
        return this.id;

    }
    public getBudget():number{
        return this.budget;
    }
    public getBackdrop():string{
        return `https://image.tmdb.org/t/p/w500${this.backdrop_path}`;
    }
    public getOrginaltitle():string{
        return this.original_title;
    }
    public getOverview():string{
        return this.overview;
    }
    public getPoster():string{
        return  `https://image.tmdb.org/t/p/w500${this.poster_path}`;
    }
    public getRuntime():number{
        return this.runtime;
    }
    public getVoteAverage():number{
        return this.vote_average;
    }
    public getRevenue():number{
        return this.revenue;
    }


}
