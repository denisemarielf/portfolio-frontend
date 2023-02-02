import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
 
  @Input() proyecto: Proyecto = new Proyecto("","","","")

  ngOnInit(): void {
  }
}
