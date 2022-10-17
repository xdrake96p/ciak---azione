export class CouponDaMandareAlServer {
    

 
    private  idFIlmDaApplicareCoupon: number;
    private nomeCoupon: string;
   private valoreCoupon: number;
  
 constructor( nomeCoupon: string, valoreCoupon: number,idFIlmDaApplicareCoupon: number) {
    this.idFIlmDaApplicareCoupon = idFIlmDaApplicareCoupon
    this.nomeCoupon = nomeCoupon
    this.valoreCoupon = valoreCoupon
  }
    public getIdFIlmDaApplicareCoupon(): number {
        return this.idFIlmDaApplicareCoupon;
    }

    public setIdFIlmDaApplicareCoupon(idFIlmDaApplicareCoupon: number): void {
        this.idFIlmDaApplicareCoupon = idFIlmDaApplicareCoupon;
    }

    public getNomeCoupon(): string {
        return this.nomeCoupon;
    }

    public setNomeCoupon(nomeCoupon: string): void {
        this.nomeCoupon = nomeCoupon;
    }

    public getValoreCoupon(): number {
        return this.valoreCoupon;
    }

    public setValoreCoupon(valoreCoupon: number): void {
        this.valoreCoupon = valoreCoupon;
    }


}
