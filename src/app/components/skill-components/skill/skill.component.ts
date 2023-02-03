import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  @Input() titulo = ""
  @Input() nivel: number = 0
  @Input() imagen = ""
}
