export class Educacion {
    id?:string;
    escuela: string;
    titulo: string;
    imagen: string;
    carrera: string;
    puntaje: number;
    inicio: string;
    fin: string;

    constructor(
        escuela: string,
        titulo: string,
        imagen: string,
        carrera: string,
        puntaje: number,
        inicio: string,
        fin: string,
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