import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos-container',
  templateUrl: './proyectos-container.component.html',
  styleUrls: ['./proyectos-container.component.css']
})
export class ProyectosContainerComponent {
  listaDeProyectos = [{titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="},
  {titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="},
  {titulo: "Aplicacion", fecha: 2021, descripcion: "Increible aplicacion hecha con React", link: "github.com", imagen: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}]
}