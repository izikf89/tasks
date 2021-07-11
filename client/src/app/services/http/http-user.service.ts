import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hostUrl } from 'src/app/config';
import { User } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {
  rootUrl: string = hostUrl + 'api/users/';

  constructor(
    private http: HttpClient,
  ) { }

  get(id: number): Observable<User> {
    return this.http.get(this.rootUrl + id) as Observable<User>
  }
}