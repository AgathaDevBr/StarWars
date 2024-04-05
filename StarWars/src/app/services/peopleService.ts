import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { environment } from 'src/environment/enviroment';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    constructor(private httpClient: HttpClient) {}

    // Método para obter a lista de pessoas
    getPeoples(): Observable<People[]> {
        return this.httpClient
            .get<People[]>(environment.apiStarWarsPeople + '/' + '1' )
            .pipe(retry(1)); // Adiciona uma tentativa de retry
    }
}
