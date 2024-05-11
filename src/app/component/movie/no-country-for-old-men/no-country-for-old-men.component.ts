import { Component } from '@angular/core';
@Component({
  selector: 'app-no-country-for-old-men',
  standalone: true,
  imports: [],
  templateUrl: './no-country-for-old-men.component.html',
  styleUrl: '../allMovie.css',
})
export class NoCountryForOldMenComponent {
  backgroundimg="./assets/img/films/no_country.png"
  title='Старим тут не місце'
  slogan='З води сухим не вийти'
  info ={
    date:  '19 травня 2007 року',
    country:  'США',
    duration: '122 хвилини',
    genre: 'Трилери, Драми, Кримінал, Іноземні',
    actor: 'Джоел Коен, Томмі Лі Джонс, Хав`єр Бардем, Джош Бролін, Вуді Гаррельсон, Келлі Макдональд та інші'
  }
}
