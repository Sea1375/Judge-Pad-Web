import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JudgesComponent } from './judges/judges.component';
import { RecorderComponent } from './recorder/recorder.component';
import { JudgeComponent } from './judge/judge.component';
import { KeypadComponent } from './judge/keypad/keypad.component';
import { MessageToRecorderComponent } from './judge/message-to-recorder/message-to-recorder.component';
import { MessageFromRecorderComponent } from './judge/message-from-recorder/message-from-recorder.component';
import { FinalScoreComponent } from './judge/final-score/final-score.component';
import { GoBackComponent } from './go-back/go-back.component';

@NgModule({
  declarations: [
    AppComponent,
    JudgesComponent,
    RecorderComponent,
    JudgeComponent,
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
export class AppModule {
}
