import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog-service.service';
import { HandleSessionService } from 'src/app/services/handle-session.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  private agentsDb = [
    {
      username: "phil",
      password: "c0u1S0n",
      name: 'Phil Coulson'
    },
    {
      username: "nick_fury",
      password: "m0th3erF*",
      name: 'Nick Fury'
    },
    {
      username: "maria_hill",
      password: "pa$$w0rd",
      name: 'Maria Hill'
    },
  ]

  authForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: DialogService, private sessionManager: HandleSessionService, private router: Router){
    this.authForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    sessionManager.isLoggedIn();
  }

  logIn(values: any){

    let agent = this.agentsDb.find((agent) => {
      return agent.username === values.username && agent.password === values.password
    })
    
    if(!agent){
      this.dialog.openDialog('S.H.I.E.L.D Credentials Invalid');
      return;
    }

    this.sessionManager.setSession(agent);
    this.router.navigate(['/'])

  }

}
