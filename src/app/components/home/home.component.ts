import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  suscription!: Subscription;

  selection: string = "sobre-mi"

  selectSection(section: string) {
    this.selection = section
    console.log(this.selection)
  }

  

  constructor(private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void {
     
  }

 }
