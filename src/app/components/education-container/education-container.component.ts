import { Component } from '@angular/core';

@Component({
  selector: 'app-education-container',
  templateUrl: './education-container.component.html',
  styleUrls: ['./education-container.component.css']
})
export class EducationContainerComponent {
  listaDeEducaciones = [{escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}, {escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}, {escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}]
}
