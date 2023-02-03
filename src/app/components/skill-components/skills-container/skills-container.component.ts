import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from "src/app/services/habilidad.service"

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.css']
})
export class SkillsContainerComponent {
 // listaDeSkills = [{titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}, {titulo: "Angular", nivel: 50, imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"}]

 listaDeSkills = new Array<Habilidad>()

 suscription!: Subscription

 constructor (public habilidadService : HabilidadService) { }

 ngOnInit(): void {
  this.getHabilidad()
  this.suscription = this.habilidadService.refresh$.subscribe(() => {
    this.getHabilidad()
  })
 }

 getHabilidad():void {
  this.habilidadService.getHabilidad().subscribe((data: any) => {
    this.listaDeSkills = data
  })
 }
}
