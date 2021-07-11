import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface';
import { DataManagmentService } from 'src/app/services/data-managment.service';
import { HttpLoginService } from 'src/app/services/http/http-login.service';
import { HttpMissionService } from 'src/app/services/http/http-mission.service';
import { HttpUserService } from 'src/app/services/http/http-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpLogin: HttpLoginService,
    private httpUser: HttpUserService,
    private dm: DataManagmentService,
    
  ) { }

  async ngOnInit() {
    await this.Login();
    
    const userID = 1;
    const user: User = await this.httpUser.get(1).toPromise();
    this.dm.user.next(user);
    
  }


  private async Login() {
    await this.httpLogin.login().toPromise();
  }
}
