import { Routes } from '@angular/router';
import { VideopageComponent } from './videopage/videopage.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'video', component: VideopageComponent }
];
