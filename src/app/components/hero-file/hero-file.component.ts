import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/model/comic';
import { Hero } from 'src/app/model/hero';
import { GetHeroesService } from 'src/app/services/get-heroes.service';

@Component({
  selector: 'app-hero-file',
  templateUrl: './hero-file.component.html',
  styleUrls: ['./hero-file.component.scss']
})
export class HeroFileComponent implements OnInit{
  private hola: string;
  private id: number = 0;
  loadingComics: boolean = false;
  hero: Hero;
  comics: Comic[] = [];
  constructor(private _Activatedroute:ActivatedRoute, private getHeroService: GetHeroesService){
   
    this._Activatedroute.paramMap.subscribe((params: any) => { 
      this.id = params.get('id'); 
    });
  }
  ngOnInit(): void {
    console.log(this.id);
    this.getHeroService.getHeroById(this.id).subscribe(
      (res => {
        this.hero = res.data.results[0];
        if(!this.hero.description || this.hero.description === ''){
          this.hero.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo mollis massa. Sed semper ac urna id fringilla. Pellentesque congue sem eget justo pharetra, a faucibus leo accumsan. Maecenas imperdiet tortor non est commodo, sit amet ullamcorper massa blandit. Nulla non hendrerit justo.'
        }
        
      })
    )
    
    this.loadingComics = true;
    this.getHeroService.getComicsFromHero(this.id).subscribe(
      (res => {
        this.loadingComics = false;
        this.comics = res.data.results
      })
    )
  }
  
}
