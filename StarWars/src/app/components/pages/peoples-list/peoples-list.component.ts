import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { environment } from 'src/environment/enviroment';
import { People } from 'src/app/models/people.model';

@Component({
  selector: 'app-peoples-list',
  templateUrl: './peoples-list.component.html',
  styleUrls: ['./peoples-list.component.css']
})
export class PeoplesListComponent implements OnInit {
  people1: People = new People(); 
  people2: People = new People(); 
  people3: People = new People(); 
  people4: People = new People(); 

  constructor(private httpClient: HttpClient) { } // Injete o HttpClient

  ngOnInit() {
    this.getPersonInfo1();
    this.getPersonInfo2();
    this.getPersonInfo3();
    this.getPersonInfo4();
  }

  getPersonInfo1() {
    this.httpClient.get<People>(
      environment.apiStarWarsPeople1 // Use a URL do ambiente para a solicitação HTTP
    )
      .subscribe({
        next: (data: People) => { // Corrija aqui para receber um único objeto People
          this.people1 = data; // Atribua os dados recebidos à variável person
        },
        error: (error) => {
          console.error('Erro ao obter informações:', error);
        }
      });
  }
  getPersonInfo2() {
    this.httpClient.get<People>(
      environment.apiStarWarsPeople2 // Use a URL do ambiente para a solicitação HTTP
    )
      .subscribe({
        next: (data: People) => { // Corrija aqui para receber um único objeto People
          this.people2 = data; // Atribua os dados recebidos à variável person
        },
        error: (error) => {
          console.error('Erro ao obter informações:', error);
        }
      });

  }
  getPersonInfo3() {
    this.httpClient.get<People>(
      environment.apiStarWarsPeople3 // Use a URL do ambiente para a solicitação HTTP
    )
      .subscribe({
        next: (data: People) => { // Corrija aqui para receber um único objeto People
          this.people3 = data; // Atribua os dados recebidos à variável person
        },
        error: (error) => {
          console.error('Erro ao obter informações:', error);
        }
      });

  }
  getPersonInfo4() {
    this.httpClient.get<People>(
      environment.apiStarWarsPeople4 // Use a URL do ambiente para a solicitação HTTP
    )
      .subscribe({
        next: (data: People) => { // Corrija aqui para receber um único objeto People
          this.people4 = data; // Atribua os dados recebidos à variável person
        },
        error: (error) => {
          console.error('Erro ao obter informações:', error);
        }
      });

  }
}
