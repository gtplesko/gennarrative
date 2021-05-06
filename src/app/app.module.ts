import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './component/loader/loader.component';
import { CardComponent } from './component/cards/card/card.component';
import { HeaderComponent } from './component/cards/header/header.component';
import { BodyCopyComponent } from './component/cards/body-copy/body-copy.component';
import { ActionBarComponent } from './component/cards/action-bar/action-bar.component';
import { CardsComponent } from './component/cards/cards.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    CardComponent,
    HeaderComponent,
    BodyCopyComponent,
    ActionBarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
