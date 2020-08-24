import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { GiveAuthToJudgeComponent } from './recorder/give-auth-to-judge/give-auth-to-judge.component';
import { CommunicateWithJudgeComponent } from './recorder/communicate-with-judge/communicate-with-judge.component';

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
    GoBackComponent,
    GiveAuthToJudgeComponent,
    CommunicateWithJudgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
