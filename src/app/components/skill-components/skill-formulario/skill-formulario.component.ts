import { Component, Input} from '@angular/core';
import { faEdit, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-skill-formulario',
  templateUrl: './skill-formulario.component.html',
  styleUrls: ['./skill-formulario.component.css']
})

export class SkillFormularioComponent {
  @Input() operation !: "create" | "edit" | "delete"
  @Input() data: Habilidad;
  editIcon = faEdit
  deleteIcon = faXmarkCircle

  habilidad: Habilidad = new Habilidad("", 0, "", "");

  constructor(private habilidadService: HabilidadService, public modal: NgbModal) { }

  onSubmit():void {
    let skill;
    if (this.operation === "create") {
         skill = new Habilidad(this.habilidad.titulo, this.habilidad.nivel, this.habilidad.tipo, this.habilidad.imagen);
    } else {
      skill = this.habilidad
    }
    if (this.operation !== "delete") {
    this.habilidadService.save(skill).subscribe(data => {
    }, err => {
      alert("Fallo")
    })
  } else {
      this.onDelete(this.data.id)
    }
}



getHabilidadDetails(): void {
    this.habilidad = this.data;
}

onDelete(id: number) {
  this.habilidadService.delete(id).subscribe(data => {

  }, err => {
    console.log(err)
  })
}


}
