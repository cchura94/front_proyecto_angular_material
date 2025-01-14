import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = environment.servidor1

  constructor(private http: HttpClient) { }

  listarProductos(){
    return this.http.get(`${this.urlBase}/producto`)
  }
}
