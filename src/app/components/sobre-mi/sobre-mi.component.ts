import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "")

  constructor(private personaService : PersonaService) {}

  suscription: Subscription;

  ngOnInit(): void {
      this.getPersona()
      this.suscription = this.personaService.refresh$.subscribe(() => {
        this.getPersona()
      })
  }

  getPersona():void {
    this.personaService.getPersona().subscribe((data: any) => {
      this.persona = data;
    })
  }
}
