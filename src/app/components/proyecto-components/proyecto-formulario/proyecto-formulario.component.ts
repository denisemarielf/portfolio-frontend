import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyecto-formulario',
  templateUrl: './proyecto-formulario.component.html',
  styleUrls: ['./proyecto-formulario.component.css'],
})
export class ProyectoFormularioComponent {
  @Input() operation!: 'create' | 'edit' | 'delete';
  @Input() data: Proyecto;

  proyecto: Proyecto = new Proyecto('', '', '', '');

  constructor(
    private proyectoService: ProyectoService,
    public modal: NgbModal
  ) {}

  onSubmit(): void {
    let exp;
    if (this.operation === 'create') {
      exp = new Proyecto(
        this.proyecto.titulo,
        this.proyecto.fecha,
        this.proyecto.descripcion,
        this.proyecto.link
      );
    } else {
      exp = this.proyecto;
    }
    if (this.operation !== 'delete') {
      this.proyectoService.save(exp).subscribe(
        (data) => {},
        (err) => {
          alert('Fallo');
        }
      );
    } else {
      this.onDelete(this.data.id);
    }
  }

  getProyectoDetails(): void {
    this.proyecto = this.data;
  }

  onDelete(id: number) {
    this.proyectoService.delete(id).subscribe(
      (data) => {},
      (err) => {
        console.log(err);
      }
    );
  }
}
