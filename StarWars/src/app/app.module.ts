import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.routing';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';
import { PeoplesListComponent } from './components/pages/peoples-list/peoples-list.component';
import { PlanetsListComponent } from './components/pages/planets-list/planets-list.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesListComponent,
    PlanetsListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicione o HttpClientModule aos imports
    RoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
