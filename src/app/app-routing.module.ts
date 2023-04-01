import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HeroFileComponent } from './components/hero-file/hero-file.component';
import { HeroFinderComponent } from './components/hero-finder/hero-finder.component';
import { HandleSessionService } from './services/handle-session.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: HeroFinderComponent,
    canActivate: [() => inject(HandleSessionService).isLoggedIn()]
  },
  {
    path: 'heroes/:id',
    component: HeroFileComponent,
    canActivate: [() => inject(HandleSessionService).isLoggedIn()]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
