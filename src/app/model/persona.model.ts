export class Persona {
	id?: number;
	nombre: string;
	apellido: string;
	fecha_nacimiento: string;
	nacionalidad: string;
	mail: string;
	sobre_mi: string;
	ocupacion: string;
    imagen_fondo: string;
	imagen_perfil: string;

    constructor(
        nombre: string, 
        apellido: string, 
        fecha_nacimiento: string, 
        nacionalidad: string,
        mail: string,
        sobre_mi: string,
        ocupacion: string,
        imagen_fondo: string,
        imagen_perfil: string) {
            this.nombre=nombre;
            this.apellido=apellido;
            this.fecha_nacimiento=fecha_nacimiento;
            this.nacionalidad=nacionalidad;
            this.imagen_fondo=imagen_fondo;
            this.mail=mail;
            this.sobre_mi=sobre_mi;
            this.ocupacion=ocupacion;
            this.imagen_perfil=imagen_perfil;
        }
}