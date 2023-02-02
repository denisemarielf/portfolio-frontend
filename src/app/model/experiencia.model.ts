export class Experiencia {
    id?: number;
    titulo: string;
    logo: string;
    descripcion: string;
    inicio:string;
    fin:string;

    constructor(
        titulo: string,
        logo: string,
        descripcion: string,
        inicio:string,
        fin:string,
    ) {
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.logo=logo;
        this.inicio=inicio;
        this.fin=fin;
    }

}