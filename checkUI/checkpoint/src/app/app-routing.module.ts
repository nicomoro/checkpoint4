import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AttractionsComponent } from './attractions/attractions.component';


const routes: Routes = [
  {path: 'homepage', component: HomePageComponent},
  {path: 'attractions', component: AttractionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
