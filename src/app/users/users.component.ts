import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  conexiones: any;

  constructor(public conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.getUser().subscribe(
      data => { this.conexiones = data
      console.log(data)}
    );
  }

}
