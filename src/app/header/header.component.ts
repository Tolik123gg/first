import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {
    title = 'Фільми'
}
