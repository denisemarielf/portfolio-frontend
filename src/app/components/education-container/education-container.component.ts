import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education-container',
  templateUrl: './education-container.component.html',
  styleUrls: ['./education-container.component.css']
})
export class EducationContainerComponent implements OnInit {
  //listaDeEducaciones = [{escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}, {escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}, {escuela: "UNGS", inicio: 2020, fin: 2021, imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", titulo: "Lic en Sistemas", carrera: "Licenciatura en Sistemas"}]

  listaDeEducaciones = new Array<Educacion>()

  constructor (public educacionService : EducacionService) {  }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe((data: any) => {
      this.listaDeEducaciones = data;
    })
  }

}
