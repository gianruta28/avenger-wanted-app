import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { GetHeroesService } from 'src/app/services/get-heroes.service';

@Component({
  selector: 'app-hero-finder',
  templateUrl: './hero-finder.component.html',
  styleUrls: ['./hero-finder.component.scss']
})
export class HeroFinderComponent implements OnInit {

  heroes: Hero[] = [];
  currentPage = 0;
  loading = false;
  noMoreHeroes = false;
  nameFilter: FormControl = new FormControl('');
  windowScrolled  = false;
  scrolled = false;

   

  constructor(private heroService: GetHeroesService, private elementRef: ElementRef){
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset !== 0;
    });
    this.loadHeroes()


    const input = this.elementRef.nativeElement.querySelector('input');
    const inputObservable = fromEvent(input, 'keyup')
      .pipe(debounceTime(500)); // wait for 500 milliseconds before emitting the event

    inputObservable.subscribe(() => {
      this.noMoreHeroes = false;
      this.currentPage = 0;
        this.heroes = [];
        this.loadHeroes();
    });

  }

  

  loadHeroes() {
    if(this.noMoreHeroes){
      return;
    }
    this.loading = true;
    this.heroService.getHeroes(this.currentPage * 20, this.nameFilter.value)
      .subscribe(res => {
        res.data.results.map((result: Hero) => {
          this.heroes.push(result)
        })
        
        this.currentPage++;
        this.loading = false;
        
        if (res.data.results.length < 20) {
          this.noMoreHeroes = true;
        }
      });
  }

  onScroll(): void {
    const index = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const offset = window.innerHeight;
    if (height - index <= offset) {
      this.loadHeroes();
    }
  }

  refreshHeroes(){
    this.noMoreHeroes = false;
    this.nameFilter.setValue('');
    this.currentPage = 0;
      this.heroes = [];
      this.loadHeroes();
  }

  scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  })();
  }


}
