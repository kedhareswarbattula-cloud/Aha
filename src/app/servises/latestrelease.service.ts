import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LatestreleaseComponent } from '../latestrelease/latestrelease.component';

@Injectable({
  providedIn: 'root'
})
export class LatestreleaseService {
  private baseurl="assets/data/latestrelease.json";
  constructor(private http:HttpClient) {}
  aha():Observable<LatestreleaseService[]>{
   return this.http.get<LatestreleaseService[]>(this.baseurl);
  }
}
