import { Component, OnInit } from '@angular/core';
import { HandleSessionService } from './services/handle-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'avenger-wanted-app';

  constructor(private sessionHandler: HandleSessionService){

  }

  ngOnInit(){
    let log = this.sessionHandler.isLoggedIn();
    console.log(log);
    
  }
}
