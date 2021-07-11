import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hostUrl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {
  rootUrl: string = hostUrl + 'api/Login/';

  constructor(
    private http: HttpClient,
  ) { }

  login(){
    return this.http.get(this.rootUrl+ 'gettoken')
  }
  
}
