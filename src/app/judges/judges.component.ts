import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-judge',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})

export class JudgesComponent implements OnInit {

  isLoading = false;
  judges: JudgeModel[] = [];

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
      this.judges = await this.judgeService.getJudges()
        // .pipe(delay(3000))
        .toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  checkValid(): void {
    try {
      this.http.post('http://localhost:3000/api/auth/valid/2', { judge_email: 'judge3@judge.com', judge_password: 'judge2' })
        .subscribe((data) => {
        console.log(data);
      });

    } catch (e) {
      console.log(e);
    } finally {
    }
  }
}
