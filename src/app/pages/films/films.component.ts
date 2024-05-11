import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { NoCountryForOldMenComponent } from '../../component/movie/no-country-for-old-men/no-country-for-old-men.component';
@Component({
  selector: 'app-films',
  standalone: true,
  imports: [RouterLink,NoCountryForOldMenComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  no_country='https://planetakino.ua/res/get-poster/00000000000000000000000000003936/vend1.jpg'
}

