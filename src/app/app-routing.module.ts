import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path : 'heroes', component : HeroesComponent},
  { path : 'films', component : MoviesComponent},
  { path : '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
