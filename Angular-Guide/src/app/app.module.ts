import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Server2Component } from './server2/server2.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DirectivesChapterComponent } from './directives-chapter/directives-chapter.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ServicesChapterComponent } from './services-chapter/services-chapter.component';
import { AccountComponent } from './services-chapter/account/account.component';
import { NewAccountComponent } from './services-chapter/new-account/new-account.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Exercise1Component,
    Server2Component,
    CockpitComponent,
    ServerElementComponent,
    DirectivesChapterComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesChapterComponent,
    AccountComponent,
    NewAccountComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
