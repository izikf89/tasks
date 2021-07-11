import { Pipe, PipeTransform } from '@angular/core';
import { MissoinStatus } from '../Enums';
import { Mission } from '../interface';

@Pipe({
  name: 'taskDone'
})
export class TaskDonePipe implements PipeTransform {

  transform(missions: Mission[] | null): Mission[] | null {
    const dateNow = new Date();
    return (<Mission[]>missions)?.filter(mission => mission.taskStatus === MissoinStatus.DONE);
  }

}
