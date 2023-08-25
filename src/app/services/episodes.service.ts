import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIURL } from 'src/environments/R&MAPI';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes(){
    return this.http.get(APIURL.episodes);
  }

  getEpisode(id:any){
    return this.http.get(`${APIURL.episodes}/${id}`);
  }
}
