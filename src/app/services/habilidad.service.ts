import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private _refresh$ = new Subject<void>()

  get refresh$() {
    return this._refresh$;
  }

  URL =  "http://localhost:8080/habilidades"

  constructor(private http :HttpClient) { }

  public getHabilidad(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.URL);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.http.post<any>(`${this.URL}/create`, habilidad)
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