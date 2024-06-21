import { Component } from '@angular/core';

@Component({
  selector: 'app-boys',
  standalone: true,
  imports: [],
  templateUrl: './boys.component.html',
  styleUrl: '../allSerials.css'
})
export class BoysComponent {
  boys='./assets/img/serial/boy.png'
  title='Хлопці'
  slogan='Дещо про першу порцію'
  info ={
    date:  '27 липня 2019 року',
    country:  'США',
    duration: '4 сезони',
    genre: 'Фантастика, Комедія, Кримінал, Бойовик',
    actor: 'Карл Урбан, Джей Квейд, Ентоні Старр, Ерін Моріарті, Джессі Т. Ашер, Лас Алосно, Чейс Кроуфорд, Томер Капон, Карен Фукугара, Натан Мітчелл'
  }
}
