import { Component } from '@angular/core';

@Component({
  selector: 'app-threemetr',
  standalone: true,
  imports: [],
  templateUrl: './threemetr.component.html',
  styleUrl: '../allmovie.css'
})
export class ThreemetrComponent {
  backgroundimg = "./assets/img/films/three.png"
  title = 'Три метри над рівнем неба'
  slogan = 'Коли любов забирає у хмари…'
  info = {
    date: '6 листопада 2010 року',
    country: 'Іспанія',
    duration: '118 хвилини',
    genre: 'Драми , Романтичні',
    actor: 'Маріо Касас, Марія Вальверде, Альваро Сервантес, Марина Салас, Луїс Фернандес, Андреа Дуро'
  }
}
