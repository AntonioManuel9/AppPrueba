import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsvComponent } from './csv/csv.component';
import { GroupCsvComponent } from './group-csv/group-csv.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'csv', component: CsvComponent },
  { path: 'agrupamientoCsv', component: GroupCsvComponent },
  { path: 'holaMundo', component: HolaMundoComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userList', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
