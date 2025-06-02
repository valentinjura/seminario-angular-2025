import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerListComponent } from './hamburger-list/hamburger-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryHamburgersComponent } from './brewery-hamburgers/brewery-hamburgers.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
@NgModule({
  declarations: [
    AppComponent,
    HamburgerListComponent,
    ShoppingCartComponent,
    BreweryAboutComponent,
    BreweryHamburgersComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
