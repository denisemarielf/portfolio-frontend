import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';
import {  tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _refresh$ = new Subject<void>()

  get refresh$() {
    return this._refresh$;
  }

  URL =  "https://portfolio-backend-lk6h.onrender.com/proyecto"

  constructor(private http :HttpClient) { }

  public getProyecto(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(`${this.URL}/create`, proyecto)
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