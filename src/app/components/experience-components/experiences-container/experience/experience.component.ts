import { Component, Input, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  @Input() experiencia: Experiencia = new Experiencia("","","","","")

  constructor(private tokenService: TokenService) { }

  @Input() isLogged!: boolean;
  deleteIcon = faSquareXmark
  editIcon = faEdit

  ngOnInit(): void {
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  
}
