import { Injectable } from '@angular/core';
import { Mollywoodmood } from '../models/mollywoodmood';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
private baseurl="assets/Mollywoodmoodimages.json";
  constructor(private http:HttpClient) {}
  aha():Observable<Mollywoodmood[]>{
   return this.http.get<Mollywoodmood[]>(this.baseurl);
  }

}
