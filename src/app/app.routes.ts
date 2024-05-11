import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FilmsComponent } from './pages/films/films.component';
import { NoCountryForOldMenComponent } from './component/movie/no-country-for-old-men/no-country-for-old-men.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'film',component:FilmsComponent},
    {path:'film',children:[
        {path:'no_country',title:'Старим тут не місце',component:NoCountryForOldMenComponent}
    ]}
];
