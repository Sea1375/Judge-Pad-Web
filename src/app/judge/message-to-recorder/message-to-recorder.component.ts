import { Component, Input, OnInit } from '@angular/core';

import { JudgeService } from '../../core/services/judge.service';
import { JudgeModel } from '../../core/models/judge-model';

@Component({
  selector: 'app-message-to-recorder',
  templateUrl: './message-to-recorder.component.html',
  styleUrls: ['./message-to-recorder.component.scss']
})
export class MessageToRecorderComponent implements OnInit {

  @Input() judgeId: number;

  isLoading = false;
  message: string;

  constructor(
    private judgeService: JudgeService
  ) {
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.message = '';
  }

  async send(): Promise<any> {
    try {
      this.isLoading = true;
      const data = {
        message_to_judge: this.message
      };
      this.judgeService.setDataFromJudge(this.judgeId, data);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
