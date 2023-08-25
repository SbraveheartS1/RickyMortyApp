import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIURL } from 'src/environments/R&MAPI';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations(){
    return this.http.get(APIURL.locations);
  }

  getLocation(id:any){
    return this.http.get(`${APIURL.locations}/${id}`);
  }
}
