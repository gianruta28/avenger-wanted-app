import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { HandleSessionService } from 'src/app/services/handle-session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  showBackButton: boolean = false;
  agent: any;
  constructor(private router: Router, private sessionManager: HandleSessionService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        if(event.url !== '/' && event.url !== '/auth') this.showBackButton = true;
        else this.showBackButton = false;
     }

    });
    
  }

  ngOnInit(){
    
    this.sessionManager.sessionAction$.subscribe((value) => {
      console.log(value);
      
      if(value instanceof Object){
        this.agent = '';
      }else {
        this.agent = value;
      }
    })
    
    this.agent = JSON.parse(this.sessionManager.getSession()).name;
    console.log(this.agent.name);
    
  }

  goHomePage(){
    this.router.navigate(['/']);
  }

  logout(){
    this.sessionManager.deleteSession();
    this.router.navigate(['/auth'])
  }

}
