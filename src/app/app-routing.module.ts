import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JudgesComponent } from './judges/judges.component';
import { ScoreComponent } from './score/score.component';
import { RecorderComponent } from './recorder/recorder.component';

const routes: Routes = [
  {path: 'judge', component: JudgesComponent},
  {path: 'score/:id', component: ScoreComponent},
  {path: 'recorder', component: RecorderComponent},
  {path: '', redirectTo: '/judges', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
