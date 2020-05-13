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

  //Retorna
  getHolaMundo() {
    // return this.http.get('http://localhost:8080/holaMundo');
    console.log(this.http.get('http://localhost:8080/holaMundo'));
  }

  //Retorna un objeto observable de tipo mapa
  getDatosAgrupados() {
    return this.http.get('http://localhost:8080/agrupamiento');
  }
}
