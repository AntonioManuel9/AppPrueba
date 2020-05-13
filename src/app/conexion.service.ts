import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  getDatosCsv() {
    return this.http.get('http://localhost:8080/ficheroObjetoCsv');
  }

  getHolaMundo() {
    return this.http.get('http://localhost:8080/holaMundo');
  }

  getDatosAgrupados() {
    return this.http.get('http://localhost:8080/agrupamiento');
  }
}
