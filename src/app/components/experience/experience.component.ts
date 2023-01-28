import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  @Input() titulo: string =""
  @Input() inicio: number = 0
  @Input() fin: number = 0
  @Input() logo: string =""
  @Input() descripcion: string =""

  ngOnInit(): void {
      
  }
}
