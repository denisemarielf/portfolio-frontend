import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL =  "http://localhost:8080/habilidades"

  constructor(private http :HttpClient) { }

  private getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL);
  }
}