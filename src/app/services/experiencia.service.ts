import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';
import {  tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private _refresh$ = new Subject<void>()
  URL =  "https://portfolio-backend-lk6h.onrender.com/experiencia"

  constructor(private http :HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }
  public get(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(`${this.URL}/create`, experiencia)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public delete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/delete/${id}`)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}

/*
  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(`${this.URL}/${id}`, experiencia);
  }
*/