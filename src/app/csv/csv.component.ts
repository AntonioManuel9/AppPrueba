import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  conexion: any;

  constructor(public conexionService: ConexionService) { }

  //Obtenemos los datos mediante la petición http del método getDatosCsv
  //Utilizando la función flecha nos retornará los valores en la variable conexion declarada arriba
  ngOnInit(): void {
    this.conexionService.getDatosCsv().subscribe(
      data => { this.conexion = data}
    );
  }

}
