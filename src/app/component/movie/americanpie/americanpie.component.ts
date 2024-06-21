import { Component } from '@angular/core';

@Component({
  selector: 'app-americanpie',
  standalone: true,
  imports: [],
  templateUrl: './americanpie.component.html',
  styleUrl: '../allmovie.css'
})
export class AmericanpieComponent {
  backgroundimg="./assets/img/films/american.png"
  title='Американьский пиріг'
  slogan='Дещо про першу порцію'
  info ={
    date:  '9 липня 1999 року',
    country:  'США',
    duration: '95 хвилини',
    genre: 'Комедія , Романтичні',
    actor: 'Кріс Вайц, Джейсон Біггз, Кріс Клейн, Томас Іен Ніколас, Елісон Хенніген, Шеннон Елізабет'
  }
}
