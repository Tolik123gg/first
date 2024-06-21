import { Component } from '@angular/core';

@Component({
  selector: 'app-wolfmovie',
  standalone: true,
  imports: [],
  templateUrl: './wolfmovie.component.html',
  styleUrl: '../allmovie.css'
})
export class WolfmovieComponent {
  backgroundimg='./assets/img/films/wolf.jpg'
  title='Вовк з Волл-стріт'
  slogan='EARN. SPEND. PARTY.'
  info ={
    date:  '13 лютого 2013 року',
    country:  'США',
    duration: '180 хвилини',
    genre: 'Комедія , Драми , Кримінал , Біографія',
    actor: 'Леонардо ДіКапріо, Джона Гілл, Марґо Роббі, Меттью Макконехі, Кайл Чандлер, Роб Райнер'
  }
}
