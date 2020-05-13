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

  ngOnInit(): void {
    this.conexionService.getDatosCsv().subscribe(
      data => { this.conexion = data}
    );
  }

}
