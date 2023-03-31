import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFinderComponent } from './components/hero-finder/hero-finder.component';

const routes: Routes = [
  {
    path: '',
    component: HeroFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
