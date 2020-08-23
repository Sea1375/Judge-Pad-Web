import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {

  isLoading = false;
  judgeId = Number(this.route.snapshot.params.id);
  judge: JudgeModel;

  constructor(
    private route: ActivatedRoute,
    private judgeService: JudgeService,
  ) {
  }

  ngOnInit(): void {
    this.getJudge();
  }

  async getJudge(): Promise<any> {
    try {
      this.isLoading = true;
      this.judge = await this.judgeService.getJudge(this.judgeId)
        // .pipe(delay(3000))
        .toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
