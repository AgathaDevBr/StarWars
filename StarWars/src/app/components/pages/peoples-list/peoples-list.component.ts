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
  people: People = new People(); 

  constructor(private httpClient: HttpClient) { } // Injete o HttpClient

  ngOnInit() {
    this.getPersonInfo();
  }

  getPersonInfo() {
    this.httpClient.get<People>(
      environment.apiStarWarsPeople // Use a URL do ambiente para a solicitação HTTP
    )
      .subscribe({
        next: (data: People) => { // Corrija aqui para receber um único objeto People
          this.people = data; // Atribua os dados recebidos à variável person
        },
        error: (error) => {
          console.error('Erro ao obter informações:', error);
        }
      });
  }
}
