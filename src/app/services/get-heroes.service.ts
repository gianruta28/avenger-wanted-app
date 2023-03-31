import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {
  private readonly API_KEY = 'be500b19bf68d2f469d00bf562be0962';
  private readonly API_URL = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private http: HttpClient) { }

  getHeroes(offset: number, nameStartsWith?: string): Observable<any> {
    const params: any = {
      apikey: this.API_KEY,
      limit: 20,
      offset
    };
    if (nameStartsWith) {
      params.nameStartsWith = nameStartsWith;
    }
    return this.http.get<any>(this.API_URL, { params });
  }

  getHeroById(id: number): Observable<any> {
    const params: any = {
      apikey: this.API_KEY
    };
    return this.http.get<any>(`${this.API_URL}/${id}`, { params });
  }
}