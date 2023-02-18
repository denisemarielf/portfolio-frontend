export class Proyecto {
    id?:number;
    titulo:string;
    fecha:string;
    descripcion:string;
    link:string;
    repositorio: string;
    imagen: string;

    constructor(
        titulo:string,
        fecha:string,
        descripcion:string,
        link:string,
        repositorio: string,
        imagen: string
    ) {
        this.titulo=titulo;
        this.fecha=fecha;
        this.descripcion=descripcion;
        this.link=link;
        this.repositorio=repositorio;
        this.imagen=imagen
    }
}