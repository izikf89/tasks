import { Component, OnInit } from '@angular/core';
import { DataManagmentService } from 'src/app/services/data-managment.service';
import { HttpMissionService } from 'src/app/services/http/http-mission.service';
import { HttpUserService } from 'src/app/services/http/http-user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

  

}
