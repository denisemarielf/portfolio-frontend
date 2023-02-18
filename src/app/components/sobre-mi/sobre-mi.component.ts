import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "")

  isLogged = false
  constructor(private personaService : PersonaService, private tokenService: TokenService) {}

  suscription: Subscription;

  ngOnInit(): void {
      this.getPersona()
      this.suscription = this.personaService.refresh$.subscribe(() => {
        this.getPersona()
      })

      if (this.tokenService.getToken()) {
        this.isLogged = true
      } else {
        this.isLogged = false
      }
  }

  getPersona():void {
    this.personaService.getPersona().subscribe((data: any) => {
      this.persona = data;
    })
  }
}
