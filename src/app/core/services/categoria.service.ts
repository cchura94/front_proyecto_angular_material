import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // solo en la version 17
  // http2 = inject(HttpClient)

  urlBase: string = "https://lv.blumbit.net/back/public/api"

  constructor(private http: HttpClient) { }

  listarCategorias(){
    return this.http.get(`${this.urlBase}/categoria`)
  }

  guardarCategoria(datos: any){
    return this.http.post(`${this.urlBase}/categoria`, datos);
  }

  mostrarCategoria(id: number){
    return this.http.get(`${this.urlBase}/categoria/${id}`);

  }
  
  modificarCategoria(id: number, datos: any){
    return this.http.put(`${this.urlBase}/categoria/${id}`, datos);
  }

  eliminarCategorias(id: number){
    return this.http.delete(`${this.urlBase}/categoria/${id}`);
  }
}
