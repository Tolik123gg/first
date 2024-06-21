import { Component } from '@angular/core';

@Component({
  selector: 'app-firemovie',
  standalone: true,
  imports: [],
  templateUrl: './firemovie.component.html',
  styleUrl: '../allmovie.css'
})
export class FiremovieComponent {
  backgroundimg="./assets/img/films/fire.png"
  title='Вогнеборці'
  slogan='Важливо не те, що стоїть перед тобою, а те, хто стоїть поруч'
  info ={
    date:  '6 жовтня  2017 року',
    country:  'США',
    duration: '134 хвилини',
    genre: 'Драма, Бойовик, Біографічний',
    actor: 'Джош Бролін, Майлз Теллер, Джефф Бріджес, Джеймс Бедж Дейл, Тейлор Кітч, Дженніфер Коннеллі, Скотт Гейз, Алекс Расселл, Бен Гарді, Наталі Голл'
  }
}
