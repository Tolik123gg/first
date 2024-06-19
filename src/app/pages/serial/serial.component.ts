import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serial',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './serial.component.html',
  styleUrl: './serial.component.css'
})
export class SerialComponent {
  boy='https://uaserials.pro/posters/1325.jpg'
  game='https://upload.wikimedia.org/wikipedia/uk/1/17/%D0%93%D1%80%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%BB%D1%96%D0%B2.jpg'
  bra='https://uaserials.pro/posters/67.jpg'
  bad='https://upload.wikimedia.org/wikipedia/uk/7/78/%D0%A5%D0%BE%D0%B4%D1%8F%D1%87%D1%96_%D0%BC%D0%B5%D1%80%D1%86%D1%96.jpg'
  home='https://uaserials.pro/posters/1418.jpg'
  dragon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAHP_Wa9tRy4T_kAl_MgAWNXyCapN91bBSQ&s'
}
