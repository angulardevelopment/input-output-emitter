import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.component';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [ FormsModule ],

  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  standalone: true, // This component is standalone,
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
