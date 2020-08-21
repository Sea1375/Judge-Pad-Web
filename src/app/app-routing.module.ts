import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JudgeComponent } from './judge/judge.component';
import { ScoreComponent } from './score/score.component';
import { RecorderComponent } from './recorder/recorder.component';

const routes: Routes = [
  { path: 'judge', component: JudgeComponent },
  { path: 'score/:id', component: ScoreComponent },
  { path: 'recorder', component: RecorderComponent },
  { path: '', redirectTo: '/judge', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
