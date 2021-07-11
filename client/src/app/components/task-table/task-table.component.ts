import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MissoinStatus } from 'src/app/Enums';
import { Mission } from 'src/app/interface';
import { DataManagmentService } from 'src/app/services/data-managment.service';
import { HttpMissionService } from 'src/app/services/http/http-mission.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  constructor(
    private httpMission: HttpMissionService,
    private dm: DataManagmentService,
  ) { }
    
  missions: Observable<Mission[]> = this.dm.mission.asObservable();
    
  ngOnInit(): void {
    this.dm.getMission();
    
    this.subscribeUserData();
  }

  private subscribeUserData() {
    this.dm.user.subscribe(user =>  this.dm.getMission())
  }

  async SetDone(mission: Mission) {
    mission.taskStatus = MissoinStatus.DONE;
    const missions: Mission[] = await this.httpMission.put(mission.id, mission).toPromise();
    this.dm.mission.next(missions);
  }
}
