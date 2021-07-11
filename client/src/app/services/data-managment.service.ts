import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Mission, User } from '../interface';
import { HttpMissionService } from './http/http-mission.service';

@Injectable({
  providedIn: 'root'
})
export class DataManagmentService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>(<any>null)
  mission: BehaviorSubject<Mission[]> = new BehaviorSubject<Mission[]>([])

  constructor(
    private httpMission: HttpMissionService,
  ) { }

  async getMission() {
    const userId: number = this.user.value?.id;
    
    if(userId){
      const missions: Mission[] =  await this.httpMission.getByUser(userId).toPromise();    
      this.mission.next(missions);      
    }
  }  

}
