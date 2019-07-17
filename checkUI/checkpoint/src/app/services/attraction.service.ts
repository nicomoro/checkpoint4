import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Attraction } from '../shared/models/attraction.model';

@Injectable({
    providedIn: 'root',
    })

export class AttractionService {

    public api = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {}

        public getAttractions(): Observable<Attraction[]> {
            return this.http.get<Attraction[]>(`${this.api}/attractions`);
        }

}
