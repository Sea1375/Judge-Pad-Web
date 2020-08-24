import { Component, Input, OnInit } from '@angular/core';

import { KeyModel } from '../../core/models/key-model';
import { KEYS } from '../../core/mock/mock-keys';
import { JudgeService } from '../../core/services/judge.service';
import { JudgeModel } from '../../core/models/judge-model';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Input() judgeId: number;

  isLoading = false;
  keys: KeyModel[] = KEYS;
  currentScore = 0;

  constructor(
    private judgeService: JudgeService
  ) {
  }

  ngOnInit(): void {
  }

  setScore(key: number): void {
    this.currentScore = key === 0.5 ? this.currentScore + key : key;
  }

  clear(): void {
    this.currentScore = 0;
  }

  async send(): Promise<any> {
    try {
      this.isLoading = true;
      this.judgeService.setDataFromJudge(this.judgeId, {judge_score: this.currentScore});
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
