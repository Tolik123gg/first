import { Component } from '@angular/core';

@Component({
  selector: 'app-bloodandsweat',
  standalone: true,
  imports: [],
  templateUrl: './bloodandsweat.component.html',
  styleUrl: '../allmovie.css'
})
export class BloodandsweatComponent {
  backgroundimg='./assets/img/films/blood.png'
  title='Кров`ю і потом: Анаболіки'
    slogan='Мрій по-великому'
    info ={
    date:  '11 rdsnyz 2013 року',
    country:  'США',
    duration: '129   хвилини',
    genre: 'Драма, Комедія, Кримінал, Бойовик',
    actor: 'Двейн Джонсон, Марк Волберг, Ентоні Макі, Тоні Шелуб, Ед Гарріс, Род Кордрі, Ребел Вілсон, Бар Палі, Кен Жонг, Майкл Рісполі, Кейлі Лефковітц, Віві Пінеда'
}
}
