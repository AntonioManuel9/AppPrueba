import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-group-csv',
  templateUrl: './group-csv.component.html',
  styleUrls: ['./group-csv.component.css']
})
export class GroupCsvComponent implements OnInit {

  conexion: any;

  constructor(public conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.getDatosAgrupados().subscribe(
      data => { this.conexion = data
      console.log(data);}
    );
  }

}
