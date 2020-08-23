import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColorModel } from '../../core/models/color-model';
import { JudgeService } from '../../core/services/judge.service';

@Component({
  selector: 'app-communicate-with-judge',
  templateUrl: './communicate-with-judge.component.html',
  styleUrls: ['./communicate-with-judge.component.scss']
})
export class CommunicateWithJudgeComponent implements OnInit {

  isLoading = false;
  judges: object = [];
  scores: object = [];
  bntStyle: ColorModel[];

  constructor(
    private http: HttpClient,
    private judgeService: JudgeService
  ) { }

  ngOnInit(): void {
    this.getScores();
    this.bntStyle = [
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'},
      {color: 'btn-default'}
    ];
  }

  async getScores(): Promise<any> {
    try {
      this.isLoading = true;
      this.scores = await this.judgeService.getScores().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  changeValue(id: number, property: string, event: any): void {
    this.judges[id][property] = event.target.textContent;
  }

  async send(id: number): Promise<any> {
    try {
      this.isLoading = true;
      this.judgeService.setMessageToJudge(id, this.scores[id]);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
