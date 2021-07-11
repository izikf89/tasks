import { Pipe, PipeTransform } from '@angular/core';
import { MissoinStatus } from '../Enums';
import { Mission } from '../interface';

@Pipe({
  name: 'taskDue'
})
export class TaskDuePipe implements PipeTransform {

  transform(missions: Mission[] | null): Mission[] {
    const dateNow = new Date();
    return (<Mission[]>missions).filter(mission => new Date(mission.due) < dateNow && mission.taskStatus === MissoinStatus.DUE);
  }

}
