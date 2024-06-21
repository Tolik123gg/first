import { Component } from '@angular/core';

@Component({
  selector: 'app-sevenmovie',
  standalone: true,
  imports: [],
  templateUrl: './sevenmovie.component.html',
  styleUrl: '../allmovie.css'
})
export class SevenmovieComponent {
    backgroundimg='./assets/img/films/sem.png'
    title='Сім'
    slogan='Сім'
    info ={
    date:  '16 вересня 1995 року',
    country:  'США',
    duration: '127 хвилини',
    genre: 'Драма, Трилер, Детектив, Кримінал',
    actor: 'Бред Пітт, Морган Фрімен, Гвінет Пелтроу, Кевін Спейсі, Даніель Закапа, Джон Кассіні, Боб Мак, Пітер Кромбі'
}
}