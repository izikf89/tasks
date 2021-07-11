import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManagmentService } from 'src/app/services/data-managment.service';
import { HttpMissionService } from 'src/app/services/http/http-mission.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  addTaskForm = new FormGroup({
    Title: new FormControl('', Validators.required),
    Due: new FormControl('', Validators.required),
    UserId: new FormControl('', Validators.required),
  });

  constructor(
    private httpMission: HttpMissionService,
    private dm: DataManagmentService,
  ) { }

  ngOnInit(): void {
    this.subscribeUserData();

  }

  private subscribeUserData() {
    this.dm.user.subscribe(user => this.addTaskForm.controls.UserId.setValue(user?.id))
  }

  async submit(){
    if(this.addTaskForm.invalid)
      return;

    await this.httpMission.post(this.addTaskForm.value).toPromise()

    this.dm.getMission();
  }

}
