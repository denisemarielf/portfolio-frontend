import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {

  private url: string = "https://jsonplaceholder.typicode.com/users/1"

  constructor(private http : HttpClient) { }

  getSobreMi() {
    return this.http.get(this.url)
  }
}
