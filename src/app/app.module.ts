import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateService } from './services/candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { VoteService } from './services/vote.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
   ],
  providers: [CandidateService, VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
