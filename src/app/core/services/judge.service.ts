import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { JudgeModel } from '../models/judge-model';
import { JUDGES } from '../mock/mock-judges';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {

  constructor() { }

  getJudge(judgeId: Number): Observable<JudgeModel> {
    return of(JUDGES.find(judge => judge.id === judgeId));
  }
  
  getJudges(): Observable<JudgeModel[]> {
    return of(JUDGES);
  }
  
}
