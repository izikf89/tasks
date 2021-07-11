import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hostUrl } from 'src/app/config';
import { Mission } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpMissionService {
  rootUrl: string = hostUrl + 'api/missions/';

  constructor(
    private http: HttpClient,
  ) { }

  getByUser(userId:number) : Observable<Mission[]>{
    return this.http.get(this.rootUrl + 'ByUser/' + userId) as Observable<Mission[]>
  }

  post(data: any ) : Observable<any>{
    return this.http.post(this.rootUrl, data) as Observable<any>
  }

  put(id: number, mission: Mission ) : Observable<Mission[]>{
    return this.http.put(this.rootUrl + id, mission) as Observable<Mission[]>
  }

}
