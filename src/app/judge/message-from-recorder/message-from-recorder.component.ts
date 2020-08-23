import { Component, Input, OnInit } from '@angular/core';

import { ScoreModel } from '../../core/models/score-model';
import { JudgeService } from '../../core/services/judge.service';

@Component({
  selector: 'app-message-from-recorder',
  templateUrl: './message-from-recorder.component.html',
  styleUrls: ['./message-from-recorder.component.scss']
})
export class MessageFromRecorderComponent implements OnInit {

  @Input() judgeId: number;
  isLoading = false;
  message: string;
  score: ScoreModel;

  constructor(
    private judgeService: JudgeService
  ) {
  }

  ngOnInit(): void {
    this.getScore();
  }

  async getScore(): Promise<any> {
    try {
      this.isLoading = true;
      this.judgeService.getScore(this.judgeId);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
