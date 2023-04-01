import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HandleSessionService {

  private session$ = new BehaviorSubject<any>({});
  sessionAction$ = this.session$.asObservable();
  constructor(private cookieManager: CookieService, private router: Router ) {}

  setSession(agent: any) {
    this.cookieManager.set('agentLogedIn', JSON.stringify(agent))
    this.session$.next(agent.name);
  }

  deleteSession(){
    this.cookieManager.delete('agentLogedIn')
    this.session$.next('');
  }

  getSession(){
    return this.cookieManager.get('agentLogedIn');
  }

  // Should only be used on guard authentication
  isLoggedIn(){
    let agent = this.getSession();
    if(!agent){
      this.router.navigate(['/auth']);
      return false;
    }
    return true
    
  }
}
