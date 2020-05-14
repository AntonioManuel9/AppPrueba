import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  //Retorna objeto de tipo observable con todos los datos del csv
  getDatosCsv() {
    return this.http.get('http://localhost:8080/ficheroObjetoCsv');
  }

  //Introducimos el responseType para indicarle que lo que retorne será de tipo String
  //Si no le indicamos eso, el navegador entenderá que es un Objeto JSON y al intentar parsearlo da un error
  getHolaMundo() {
    return this.http.get('http://localhost:8080/holaMundo', {responseType: 'text'});
  }

  //Retorna un objeto observable de tipo mapa
  getDatosAgrupados() {
    return this.http.get('http://localhost:8080/agrupamiento');
  }
  
}
