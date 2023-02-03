import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent {
  @Input() operation!: "create" | "edit" | "delete"
  @Input() data: Educacion;
  
  educacion: Educacion = new Educacion("", "", "", "", 0, 0, 0);

  
  constructor(private educacionService: EducacionService, public modal: NgbModal) { }

  onSubmit():void {
      let edu;
      if (this.operation === "create") {
           edu = new Educacion(this.educacion.escuela, this.educacion.titulo, this.educacion.imagen, this.educacion.carrera, this.educacion.puntaje, this.educacion.inicio, this.educacion.fin);
      } else {
        edu = this.educacion
      }
      if (this.operation !== "delete") {
      this.educacionService.save(edu).subscribe(data => {
      }, err => {
        alert("Fallo")
        console.log(err)
      })
    } else {
        this.onDelete(this.data.id)
      }
  }



  getEducacionDetails(): void {
      this.educacion = this.data;
  }

  onDelete(id: number) {
    this.educacionService.delete(id).subscribe(data => {

    }, err => {
      console.log(err)
    })
  }


}
