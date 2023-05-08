import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private _refresh$ = new Subject<void>()

  URL = "https://portfolio-backend-lk6h.onrender.com/persona";

  constructor(private http: HttpClient) {  }

  get refresh$() {
    return this._refresh$;
  }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+"/3");
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(`${this.URL}/create`, persona)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
  
}
