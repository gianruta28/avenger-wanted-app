import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFileComponent } from './components/hero-file/hero-file.component';
import { HeroFinderComponent } from './components/hero-finder/hero-finder.component';

const routes: Routes = [
  {
    path: '',
    component: HeroFinderComponent
  },
  {
    path: 'heroes/:id',
    component: HeroFileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
