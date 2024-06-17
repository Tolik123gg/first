import { Component } from '@angular/core';

@Component({
  selector: 'app-threemetr',
  standalone: true,
  imports: [],
  templateUrl: './threemetr.component.html',
  styleUrl: '../allmovie.css'
})
export class ThreemetrComponent {
  backgroundimg="./assets/img/films/three.png"
  title='Інтерстеллар'
  slogan='Наступний крок людства стане найбільшим'
  info ={
    date:  '6 листопада 2014 року',
    country:  'США',
    duration: '169 хвилини',
    genre: 'пригоди, драми, фантастика',
    actor: 'Еллен Берстін, Меттью Макконехі, Джон Літгоу, Девід Ойелоуо'
  }
}
