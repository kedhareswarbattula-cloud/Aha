import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ahaoriginals } from '../models/ahaoriginals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {
  private baseurl="assets/images.json";
  private baseurl1="http://Localhost:8081/api/v1/Ahaoriginals";
  constructor(private http:HttpClient) {}
  aha():Observable<Ahaoriginals[]>{
   return this.http.get<Ahaoriginals[]>(this.baseurl);
  }
}
