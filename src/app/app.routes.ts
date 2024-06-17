import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FilmsComponent } from './pages/films/films.component';
import { NoCountryForOldMenComponent } from './component/movie/no-country-for-old-men/no-country-for-old-men.component';
import { IterstellarComponent } from './component/movie/iterstellar/iterstellar.component';
import { SevenmovieComponent } from './component/movie/sevenmovie/sevenmovie.component';
import { ThreemetrComponent } from './component/movie/threemetr/threemetr.component';
import { GorizontComponent } from './component/movie/gorizont/gorizont.component';
import { AmericanpieComponent } from './component/movie/americanpie/americanpie.component';
import { ElcaminoComponent } from './component/movie/elcamino/elcamino.component';
import { TimemovieComponent } from './component/movie/timemovie/timemovie.component';
import { OneplusoneComponent } from './component/movie/oneplusone/oneplusone.component';
import { FiremovieComponent } from './component/movie/firemovie/firemovie.component';
import path from 'path';
import { SerialComponent } from './pages/serial/serial.component';
import { BoysComponent } from './component/serials/boys/boys.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'film',component:FilmsComponent},
    {path:'film',children:[
        {path:'no-country',title:'Старим тут не місце',component:NoCountryForOldMenComponent},
        {path:'interstellar',title:'Інтерстеллар',component:IterstellarComponent},
        {path:'sem',title:'СІм',component:SevenmovieComponent},
        {path:'tri-metra-nadurovnem-neba',title:'Три метри над рівнем неба',component:ThreemetrComponent},
        {path:'glubokovodnyy-gorizont',title:'Глибоководний горизонт',component:GorizontComponent},
        {path:'american-pie',title:'Американський пиріг',component:AmericanpieComponent},
        {path:'el-camino',title:'Ель Каміно: Пуститися',component:ElcaminoComponent},
        {path:'chas',title:'Час',component:TimemovieComponent},
        {path:'one-plus-one',title:'1+1',component:OneplusoneComponent},
        {path:'fire-man',title:'Вогнеборці',component:FiremovieComponent},
        {path:'time',title:'Час',component:TimemovieComponent},
    ]},
    {path:'serial', component:SerialComponent},
    {path:'serial',children:[
        {path:'boys',title:'Хлопці',component:BoysComponent},
        // {path:'interstellar',title:'Інтерстеллар',component:IterstellarComponent},
        // {path:'sem',title:'СІм',component:SevenmovieComponent},
        // {path:'tri-metra-nadurovnem-neba',title:'Три метри над рівнем неба',component:ThreemetrComponent},
        // {path:'glubokovodnyy-gorizont',title:'Глибоководний горизонт',component:GorizontComponent},
        // {path:'american-pie',title:'Американський пиріг',component:AmericanpieComponent},
        // {path:'el-camino',title:'Ель Каміно: Пуститися',component:ElcaminoComponent},
        // {path:'chas',title:'Час',component:TimemovieComponent},
        // {path:'one-plus-one',title:'1+1',component:OneplusoneComponent},
        // {path:'fire-man',title:'Вогнеборці',component:FiremovieComponent},
        // {path:'time',title:'Час',component:TimemovieComponent},
    ]}
];
