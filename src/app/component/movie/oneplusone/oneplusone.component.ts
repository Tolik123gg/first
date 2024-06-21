import { Component } from '@angular/core';

@Component({
  selector: 'app-oneplusone',
  standalone: true,
  imports: [],
  templateUrl: './oneplusone.component.html',
  styleUrl: '../allmovie.css'
})
export class OneplusoneComponent {
  backgroundimg = "./assets/img/films/one.png"
  title = '1+1'
  slogan = 'Іноді доводиться заходити в чужий світ, щоб з’ясувати, чого не вистачає у власному.'
  info = {
    date: '3 жовтня 2011 року',
    country: 'США',
    duration: '112 хвилини',
    genre: 'Драма, Комедія, Біографічний',
    actor: 'Франсуа Клюзе, Омар Сі, Анн Ле Ні, Одрі Фльоро, Жозефін де Мо, Клотільд Молле, Альба Гайя Крагеде Беллуджі, Сіріл Менді, Салімата Камате'
  }
}
