import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() escuela: string =""
  @Input() inicio: number = 0
  @Input() fin: number = 0
  @Input() imagen: string =""
  @Input() titulo: string =""
  @Input() carrera: string =""

  ngOnInit(): void {
  }
}
