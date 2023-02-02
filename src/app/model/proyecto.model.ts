export class Proyecto {
    id?:number;
    titulo:string;
    fecha:string;
    descripcion:string;
    link:string;

    constructor(
        titulo:string,
        fecha:string,
        descripcion:string,
        link:string,
    ) {
        this.titulo=titulo;
        this.fecha=fecha;
        this.descripcion=descripcion;
        this.link=link;
    }
}