import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
 @Input() titulo: string = ""
 @Input() link: string = ""
 @Input() imagen: string = ""
 @Input() fecha: number = 0
 @Input() descripcion: string = ""
}
