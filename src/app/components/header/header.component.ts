import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showBackButton: boolean = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        if(event.url !== '/' && event.url !== '/auth') this.showBackButton = true;
        else this.showBackButton = false;
     }

    });
};

goHomePage(){
  this.router.navigate(['/']);
}

}
