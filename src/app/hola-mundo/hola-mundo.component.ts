import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  conexion: any;
  
  constructor(public conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.getDatosCsv().subscribe(
      data => { this.conexion = data}
    );
    //this.conexionService.getHolaMundo();
  }

}
