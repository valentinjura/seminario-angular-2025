import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreweryHamburgersComponent } from './brewery-hamburgers/brewery-hamburgers.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'hamburgers', pathMatch: 'full' },
  { path: 'hamburgers', component: BreweryHamburgersComponent },
  { path: 'about', component: BreweryAboutComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
