import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';

@Component({
  selector: 'app-judge',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})

export class JudgesComponent implements OnInit {

  isLoading = false;
  judges: JudgeModel[] = [];

  constructor(
    private judgeService: JudgeService
  ) {
  }

  ngOnInit(): void {
    this.getJudges();
  }

  async getJudges(): Promise<any> {
    try {
      this.isLoading = true;
      this.judges = await this.judgeService.getJudges()
        .pipe(delay(3000))
        .toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
