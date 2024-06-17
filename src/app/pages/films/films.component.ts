import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { NoCountryForOldMenComponent } from '../../component/movie/no-country-for-old-men/no-country-for-old-men.component';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-films',
  standalone: true,
  imports: [RouterLink,NoCountryForOldMenComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  no_country='https://planetakino.ua/res/get-poster/00000000000000000000000000003936/vend1.jpg'
  inter='https://s3.vcdn.biz/static/f/6755876391/image.jpg'
  three='https://upload.wikimedia.org/wikipedia/uk/5/5b/%D0%A2%D1%80%D0%B8_%D0%BC%D0%B5%D1%82%D1%80%D0%B8_%D0%BD%D0%B0%D0%B4_%D1%80%D1%96%D0%B2%D0%BD%D0%B5%D0%BC_%D0%BD%D0%B5%D0%B1%D0%B0.png'
  deepwater_horizon='https://upload.wikimedia.org/wikipedia/uk/c/c0/%D0%93%D0%BB%D0%B8%D0%B1%D0%BE%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82.jpg'
  american='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjjfv8gCbAJBOZ51jdmjxsI54zltRKgHucQ&s'
  el_camino='https://upload.wikimedia.org/wikipedia/uk/thumb/4/4e/El_camino_bb_film_poster.jpg/225px-El_camino_bb_film_poster.jpg'
  time='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Z14PVOcqFoilA1IwuxlLPiAYhabxbfBd1y1beuWF7ksZ_IfqLsqQwqpZ9ycLuYNBUKQ&usqp=CAU'
  one='https://static.hdrezka.ac/i/2024/1/17/z60772d98bc31ey18b52p.jpeg'
  fireman='https://uaserials.pro/posters/3893.jpg'
  pain='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCijWAQHMhPiQ_c26SAhqPPG9CI3QUPC3eEw&s'
  wolf='https://uaserials.pro/posters/2068.jpg'
  seven='https://uaserial.club/images/serials/64/64148ee689785083572463.webp'
}

