import { Component } from '@angular/core';

@Component({
  selector: 'app-elcamino',
  standalone: true,
  imports: [],
  templateUrl: './elcamino.component.html',
  styleUrl: '../allmovie.css'
})
export class ElcaminoComponent {
  backgroundimg="./assets/img/films/camino.png"
  title='Ель Каміно: Пуститися берега'
  slogan='Нестійке. Летке. Небезпечне. І це тільки хімія.'
  info ={
    date:  '7 жовтня 2019 року',
    country:  'США',
    duration: '122 хвилини',
    genre: 'Фільми , Екшн , Кримінал , Трилери , Пуститися берега',
    actor: 'Аарон Пол, Джонатан Бенкс, Matt Jones, Чарльз Бейкер, Todd Terry, Джулі Перл'
  }
}
