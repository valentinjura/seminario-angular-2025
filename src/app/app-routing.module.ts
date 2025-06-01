import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryHamburgersComponent } from './brewery-hamburgers/brewery-hamburgers.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

const routes: Routes = [
  {path: '', redirectTo:'hamburgers', pathMatch: 'full'},
  {path: 'hamburgers', component: BreweryHamburgersComponent},
  {path: 'about', component: BreweryAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
