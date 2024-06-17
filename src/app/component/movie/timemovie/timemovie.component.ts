import { Component } from '@angular/core';

@Component({
  selector: 'app-timemovie',
  standalone: true,
  imports: [],
  templateUrl: './timemovie.component.html',
  styleUrl: '../allMovie.css'
})
export class TimemovieComponent {
  backgroundimg="./assets/img/films/in-time.png"
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
