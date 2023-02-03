export class Habilidad {
    id?: number;
    titulo: string;
    nivel: number;
    tipo: string;
    imagen: string;
    constructor(
        titulo:string,
        nivel:number,
        tipo: string,
        imagen: string,
    ) {
        this.titulo=titulo;
        this.nivel=nivel;
        this.tipo=tipo;
        this.imagen=imagen;
    }

}