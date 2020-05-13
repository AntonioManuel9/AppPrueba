import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { CsvComponent } from './csv/csv.component';
import { GroupCsvComponent } from './group-csv/group-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HolaMundoComponent,
    CsvComponent,
    GroupCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
