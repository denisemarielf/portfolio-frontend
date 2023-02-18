import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-experiences-container',
  templateUrl: './experiences-container.component.html',
  styleUrls: ['./experiences-container.component.css']
})
export class ExperiencesContainerComponent {
  //listaDeExperiencias = [{titulo: "msdmfksdfm", inicio: 2020, fin: 2021, logo: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", descripcion: "mdksfmkds"}, {titulo: "msdmfksdfm", inicio: 2020, fin: 2021, logo: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", descripcion: "mdksfmkds"},{titulo: "msdmfksdfm", inicio: 2020, fin: 2021, logo: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=", descripcion: "mdksfmkds"}]
  listaDeExperiencias = new Array<Experiencia>()
  isLogged=false
  suscription!: Subscription
  constructor (public experienciaService : ExperienciaService, private tokenService : TokenService) {  }


  ngOnInit(): void {
    this.getExperiencia()
    this.suscription = this.experienciaService.refresh$.subscribe(()=> {
      this.getExperiencia()
    })
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else {
      this.isLogged = false
    }
  }

  getExperiencia():void {
    this.experienciaService.get().subscribe((data: any) => {
      this.listaDeExperiencias = data;

    })
  }

}
