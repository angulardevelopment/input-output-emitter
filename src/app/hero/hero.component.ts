import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  ngOnInit() {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero = {'id':1, 'name': ''};

  getHeroes(): void {
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.getHeroess().then(response => this.heroes = response);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

   getHeroess(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  //not necassary to declare promise type
   // getHeroes(){
  //   return Promise.resolve(HEROES);
  // }

  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroess()), 2000);
  });
}

  // getHero(id: number) : Hero{
  //   return HEROES[id];
  // }

}

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export class Hero {
  id: number;
name: string;
}
