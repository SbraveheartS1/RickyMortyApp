import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIURL } from 'src/environments/R&MAPI';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(){
    return this.http.get(APIURL.characters);
  }

  getCharacter(id:any){
    return this.http.get(`${APIURL.characters}/${id}`);
  }
}
