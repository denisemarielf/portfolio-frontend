import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faHouse, faBook, faBriefcase, faGear, faLaptop } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<string>()
  homeIcon = faHouse
  experienciaIcon= faBriefcase
  educacionIcon= faBook
  skillsIcon= faGear
  proyectosIcon= faLaptop
  navbarOpen = false;

  selectSection(value: string) {
    this.newItemEvent.emit(value)
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  
  }

  ngOnInit(){
 
  }



}
