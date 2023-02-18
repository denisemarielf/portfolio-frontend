import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos-container',
  templateUrl: './proyectos-container.component.html',
  styleUrls: ['./proyectos-container.component.css']
})
export class ProyectosContainerComponent implements OnInit {
 // listaDeProyectos = [{titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="},
 // {titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="},
  //{titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}]
  listaDeProyectos = new Array<Proyecto>()

  constructor (public proyectoService : ProyectoService, private tokenService: TokenService) {  }
  isLogged=false;
  suscription!: Subscription;
  ngOnInit(): void {
    this.getProyecto()
    this.suscription = this.proyectoService.refresh$.subscribe(() => {
      this.getProyecto()
    })
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }
  }

  getProyecto():void {
    this.proyectoService.getProyecto().subscribe((data: any) => {
      this.listaDeProyectos = data;
    })
  }

}
