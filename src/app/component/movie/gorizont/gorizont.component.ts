import { Component } from '@angular/core';

@Component({
  selector: 'app-gorizont',
  standalone: true,
  imports: [],
  templateUrl: './gorizont.component.html',
  styleUrl: '../allmovie.css'
})
export class GorizontComponent {
  backgroundimg = "./assets/img/films/gorizont.png"
  title = 'Глибоководний горизонт'
  slogan = 'Неймовірна історія про героїзм у безнадійній ситуації'
  info = {
    date: '29 вересня 2016 року',
    country: 'США, Гонконг, Китай',
    duration: '169 хвилини',
    genre: 'Фільм, Драма, Трилер, Бойовик, Історичний',
    actor: 'Марк Волберг, Кейт Гадсон, Курт Расселл, Джон Малковіч, Ділан О’Брайен, Ітан Саплі, Джина Родрігез, Дуглас М. Гріффін, Девід Мальдонадо, Бред Ліленд'
  }
}
