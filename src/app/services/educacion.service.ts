import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private _refresh$ = new Subject<void>()

  URL =  "https://portfolio-backend-lk6h.onrender.com/edu"

  constructor(private http :HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.http.post<any>(`${this.URL}/create`, educacion)
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