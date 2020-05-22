import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;

  constructor(public conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.getUser().subscribe(
      data => { this.users = data
      console.log(data)}
    );
  }

}
