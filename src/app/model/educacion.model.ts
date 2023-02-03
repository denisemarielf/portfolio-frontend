export class Educacion {
    id?:number;
    escuela: string;
    titulo: string;
    imagen: string;
    carrera: string;
    puntaje: number;
    inicio: number;
    fin: number;

    constructor(
        escuela: string,
        titulo: string,
        imagen: string,
        carrera: string,
        puntaje: number,
        inicio: number,
        fin: number,
    ) {
        this.escuela=escuela;
        this.titulo=titulo;
        this.imagen=imagen;
        this.carrera=carrera;
        this.puntaje=puntaje;
        this.inicio=inicio;
        this.fin=fin;
    }
}