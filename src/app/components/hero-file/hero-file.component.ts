import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetHeroesService } from 'src/app/services/get-heroes.service';

@Component({
  selector: 'app-hero-file',
  templateUrl: './hero-file.component.html',
  styleUrls: ['./hero-file.component.scss']
})
export class HeroFileComponent implements OnInit{

  private id: number = 0;
  hero: any;
  comics: any[] = [];
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
        console.log(this.hero);
        
      })
    )

    this.getHeroService.getComicsFromHero(this.id).subscribe(
      (res => {
        console.log(res.data);
        this.comics = res.data.results
      })
    )
  }
  
}
