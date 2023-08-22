import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environment/environment';
import { People } from 'src/models/Planetas';

@Injectable({
    providedIn: 'root'
})
export class PeopleService{

    peoples: People = new People();
    endpoint: string = environment.ApiStarWars + "/people/1/";

    constructor(
        private httpClient: HttpClient
    ) {

    }
    getPeoples() : Observable<People>{
        return this.httpClient.get<People>(this.endpoint)
        .pipe(retry(1));
    }
}