import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-formulario',
  templateUrl: './experiencia-formulario.component.html',
  styleUrls: ['./experiencia-formulario.component.css']
})
export class ExperienciaFormularioComponent implements OnInit {
  @Input() operation!: "create" | "edit" | "delete"
  @Input() data: Experiencia;
  
  experiencia:Experiencia = new Experiencia("", "", "", "", "");

  constructor(private experienciaService: ExperienciaService, public modal: NgbModal) { }

  ngOnInit(): void {
      
  }

  onSubmit():void {
      let exp;
      if (this.operation === "create") {
           exp = new Experiencia(this.experiencia.titulo, this.experiencia.logo, this.experiencia.descripcion, this.experiencia.inicio, this.experiencia.fin);
      } else {
        exp = this.experiencia
      }
      if (this.operation !== "delete") {
      this.experienciaService.save(exp).subscribe(data => {
      }, err => {
        alert("Fallo")
      })
    } else {
        this.onDelete(this.data.id)
      }
  }



  getExperienciaDetails(): void {
      this.experiencia = this.data;
  }

  onDelete(id: number) {
    this.experienciaService.delete(id).subscribe(data => {

    }, err => {
      console.log(err)
    })
  }



}
