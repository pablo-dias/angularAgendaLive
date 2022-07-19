import { Live } from './../model/live.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/response-pageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl= 'http://localhost:8080/lives'
  

  constructor(private httpClient: HttpClient) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> { 
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }

  create(live: Live): Observable<Live> {
    return this.httpClient.post<Live>(this.apiUrl, live)
  }
}
