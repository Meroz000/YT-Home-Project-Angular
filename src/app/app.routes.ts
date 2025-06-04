import { Routes } from '@angular/router';
import { VideopageComponent } from './videopage/videopage.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'pagina1', component: VideopageComponent }
];
