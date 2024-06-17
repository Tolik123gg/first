import { Component } from '@angular/core';

@Component({
  selector: 'app-oneplusone',
  standalone: true,
  imports: [],
  templateUrl: './oneplusone.component.html',
  styleUrl: '../allMovie.css'
})
export class OneplusoneComponent {
  backgroundimg="./assets/img/films/one.png"
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
