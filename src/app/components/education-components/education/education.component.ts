import { Component, OnInit, Input} from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { faPenToSquare, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() educacion: Educacion = new Educacion("","","","",0,0,0)
  editIcon = faPenToSquare
  deleteIcon = faSquareXmark

  ngOnInit(): void {
  }
}
