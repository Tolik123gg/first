import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: '../allSerials.css'
})
export class GameComponent {
  backgroundimg='./assets/img/serial/trone.png'
  title='Гра престолів'
  slogan='Перемога або смерть'
  info ={
    date:  '16 квітня 2011 року',
    country:  'США',
    duration: '8 сезонів',
    genre: 'Серіал, Драма, Фентезі, Мелодрама, Пригоди',
    actor: 'Шон Бін, Джейсон Момоа, Ліна Гіді, Емілія Кларк, Пітер Дінкледж, Марк Едді, Ніколай Костер-Валдау, Кіт Гарінгтон, Софі Тернер, Мішель Фейрлі, Джуліан Гловер, Ейден Гіллен, Єн Глен, Роджер Аллам, Геррі Ллойд'
  }
}
