import { Component } from '@angular/core';

@Component({
  selector: 'app-timemovie',
  standalone: true,
  imports: [],
  templateUrl: './timemovie.component.html',
  styleUrl: '../allmovie.css'
})
export class TimemovieComponent {
  backgroundimg="./assets/img/films/in-time.png"
  title='Час'
  slogan='Живи вічно чи помри, намагаючись'
  info ={
    date:  '31 вересня 2011 року',
    country:  'США',
    duration: '109 хвилини',
    genre: 'Фантастика, Трилер, Бойовик',
    actor: 'Джастін Тімберлейк, Аманда Сейфрід, Кіліан Мерфі, Олівія Вайлд, Алекс Петтіфер, Джонні Ґалекі'
  }
}
