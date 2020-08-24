import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JudgeService } from '../core/services/judge.service';
import { JudgeModel } from '../core/models/judge-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-judge',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})

export class JudgesComponent implements OnInit {

  isLoading = false;
  judges: JudgeModel[] = [];
  selectedJudge: JudgeModel;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private judgeService: JudgeService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getJudges();
  }

  async getJudges(): Promise<any> {
    try {
      this.isLoading = true;
      this.judges = await this.judgeService.getJudges().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  login(): void {
    const value = this.form.value;
    if (this.selectedJudge.judge_email === value.email && this.selectedJudge.judge_password === value.password) {
      this.router.navigate(['judge', this.selectedJudge.judge_id]);
    } else {
      alert('Invalid password or email!');
    }
  }
}
