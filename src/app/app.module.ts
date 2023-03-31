import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HeroFinderComponent } from './components/hero-finder/hero-finder.component';
import { GetHeroesService } from './services/get-heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroFileComponent } from './components/hero-file/hero-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroFinderComponent,
    HeroFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    {provide: GetHeroesService, useClass: GetHeroesService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
