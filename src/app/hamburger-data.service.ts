import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hamburger } from './hamburger-list/hamburger';
const URL = 'https://683e3a5d1cd60dca33dac76a.mockapi.io/hamburgers/hamburgers';
@Injectable({
  providedIn: 'root'
})

export class HamburgerDataService {
  
 //codigo para consumir la api de hamburguesas y devuelve un observable a la respuesta
  public getAll(): Observable <Hamburger[]>{
   

    return this.http.get<Hamburger[]>(URL)
              .pipe(
                tap((hamburgers: Hamburger [])=> hamburgers.forEach(hamburger => hamburger.quantity = 0))
              

              );//con pipe permite hacer cosas en el medio
  }
  constructor(private http: HttpClient) { }
}
