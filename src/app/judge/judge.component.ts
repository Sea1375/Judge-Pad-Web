import { Component, OnInit } from '@angular/core';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';


@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})

export class JudgeComponent implements OnInit {

  judges: JudgeModel[];

  constructor(
    private judgeService: JudgeService
  ) { }
  
  ngOnInit(): void {
    this.getJudges();
  }

  getJudges(): void {
    this.judgeService.getJudges().subscribe(judges => this.judges = judges);
  }
}
