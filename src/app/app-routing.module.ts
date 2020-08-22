import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JudgesComponent } from './judges/judges.component';
import { JudgeComponent } from './judge/judge.component';
import { RecorderComponent } from './recorder/recorder.component';

const routes: Routes = [
  {path: 'judges', component: JudgesComponent},
  {path: 'judge/:id', component: JudgeComponent},
  {path: 'recorder', component: RecorderComponent},
  {path: '', redirectTo: '/judges', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
