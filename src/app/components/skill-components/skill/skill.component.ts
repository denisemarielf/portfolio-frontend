import { Component, Input} from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input() habilidad: Habilidad = new Habilidad("", 0, "", "");
}
