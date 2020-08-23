import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { JudgeService } from '../../core/services/judge.service';

@Component({
  selector: 'app-give-auth-to-judge',
  templateUrl: './give-auth-to-judge.component.html',
  styleUrls: ['./give-auth-to-judge.component.scss']
})
export class GiveAuthToJudgeComponent implements OnInit {

  isLoading = false;
  judges: object = [];
  editField: string;
  available = new FormControl(null);

  constructor(
    private http: HttpClient,
    private judgeService: JudgeService
  ) { }

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

  async updateList(id: number, property: string, judge: object, event: any): Promise<any> {
    try {
      this.isLoading = true;
      this.judges[id][property] = event.target.textContent;
      judge[property] = event.target.textContent;
      await this.judgeService.setJudge(id, judge).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  changeValue(id: number, property: string, event: any): void {
    this.editField = event.target.textContent;
  }

  async changeCheckbox(id: number): Promise<any> {
    try {
      this.isLoading = true;
      const data = {
        judge_available: this.available.value
      };
      await this.judgeService.setJudge(id, data);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
