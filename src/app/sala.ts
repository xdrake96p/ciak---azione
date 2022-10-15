export class Sala {
    private id: number;
    private posti: number;
    private nomeSala: string;
    private postiDisponibili: number;

    constructor(sala:any) {
        this.id = sala.id;
        this.posti = sala.posti;
        this.nomeSala = sala.nomeSala;
        this.postiDisponibili = sala.postiDisponibili;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getPosti(): number {
        return this.posti;
    }

    public setPosti(posti: number): void {
        this.posti = posti;
    }

    public getNomeSala(): string {
        return this.nomeSala;
    }

    public setNomeSala(nomeSala: string): void {
        this.nomeSala = nomeSala;
    }

    public getPostiDisponibili(): number {
        return this.postiDisponibili;
    }

    public setPostiDisponibili(postiDisponibili: number): void {
        this.postiDisponibili = postiDisponibili;
    }

   

}
