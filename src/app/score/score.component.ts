import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  judgeId: number;
  judge: JudgeModel;

  constructor(
    private route: ActivatedRoute,
    private judgeService: JudgeService,
  ) {
  }

  ngOnInit(): void {
    this.judgeId = Number(this.route.snapshot.paramMap.get('id'));
    this.getJudge();
  }

  getJudge(): void {
    this.judgeService.getJudge(this.judgeId).subscribe(judge => this.judge = judge);
  }


}
