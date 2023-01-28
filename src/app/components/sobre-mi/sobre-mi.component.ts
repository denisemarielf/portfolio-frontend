import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { SobreMiService } from 'src/app/services/sobre-mi.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "")

  constructor(private personaService : PersonaService) {}


  ngOnInit(): void {
      this.personaService.getPersona().subscribe((data: any) => {
        this.persona = data;
      })
  }
}
