import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudgeComponent } from './judge/judge.component';
import { RecorderComponent } from './recorder/recorder.component';
import { ScoreComponent } from './score/score.component';
import { KeypadComponent } from './keypad/keypad.component';
import { MessageToRecorderComponent } from './message-to-recorder/message-to-recorder.component';
import { MessageFromRecorderComponent } from './message-from-recorder/message-from-recorder.component';
import { FinalScoreComponent } from './final-score/final-score.component';
import { GoBackComponent } from './go-back/go-back.component';

@NgModule({
  declarations: [
    AppComponent,
    JudgeComponent,
    RecorderComponent,
    ScoreComponent,
    KeypadComponent,
    MessageToRecorderComponent,
    MessageFromRecorderComponent,
    FinalScoreComponent,
    GoBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
