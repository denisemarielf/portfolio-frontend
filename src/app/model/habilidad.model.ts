export class Habilidad {
    id?: number;
    titulo: string;
    nivel: number;
    tipo: string;

    constructor(
        titulo:string,
        nivel:number,
        tipo: string
    ) {
        this.titulo=titulo;
        this.nivel=nivel;
        this.tipo=tipo;
    }

}