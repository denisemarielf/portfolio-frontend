import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-sobre-mi-formulario',
  templateUrl: './sobre-mi-formulario.component.html',
  styleUrls: ['./sobre-mi-formulario.component.css']
})

export class SobreMiFormularioComponent {
  @Input() data: Persona;

  persona: Persona = new Persona("", "", "", "", "", "", "", "", "");

  constructor(private personaService: PersonaService, public modal: NgbModal) { }

  onSubmit(): void {
    this.personaService.save(this.persona)
  }

  getPersonaDetails():void {
    this.persona = this.data;
  }
}
