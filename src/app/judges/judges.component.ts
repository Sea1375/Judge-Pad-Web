import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';


@Component({
  selector: 'app-judge',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})

export class JudgesComponent implements OnInit {

  isLoading = false;
  judges: object = [];
  isVaild: boolean;

  constructor(
    private judgeService: JudgeService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getJudges();
  }

  async getJudges(): Promise<any> {
    try {
      this.isLoading = true;
      this.judgeService.getJudges().subscribe(judges => this.judges = judges);
      console.log(this.judges);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  async checkValid(judgeId: number, judge: JudgeModel): Promise<any> {
    try {
      const result = await this.judgeService.checkValid(judgeId, judge).toPromise();
      this.isVaild = result['isValid'];
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
}
