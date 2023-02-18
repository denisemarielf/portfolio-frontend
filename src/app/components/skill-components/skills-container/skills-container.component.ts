import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from "src/app/services/habilidad.service"
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css']
})
export class SkillsContainerComponent {
 // listaDeSkills = [{titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}]

 listaDeSkills = new Array<Habilidad>()
  isLogged = false
 suscription!: Subscription

 constructor (public habilidadService : HabilidadService, private tokenService: TokenService) { }

 ngOnInit(): void {
  this.getHabilidad()
  this.suscription = this.habilidadService.refresh$.subscribe(() => {
    this.getHabilidad()
  })
  if (this.tokenService.getToken()) {
    this.isLogged = true
  } else {
    this.isLogged = false
  }
 }

 getHabilidad():void {
  this.habilidadService.getHabilidad().subscribe((data: any) => {
    this.listaDeSkills = data
  })
 }
}
