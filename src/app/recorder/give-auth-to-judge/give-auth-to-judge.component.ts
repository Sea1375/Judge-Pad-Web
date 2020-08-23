import { Component, OnInit } from '@angular/core';
import { JudgeModel } from '../../core/models/judge-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-give-auth-to-judge',
  templateUrl: './give-auth-to-judge.component.html',
  styleUrls: ['./give-auth-to-judge.component.scss']
})
export class GiveAuthToJudgeComponent implements OnInit {

  isLoading = false;
  judges: object = [];
  editField: string;
  baseUrl = 'http://localhost:3001/api/auth';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getJudges();
  }

  async getJudges(): Promise<any> {
    try {
      this.isLoading = true;
      const url = this.baseUrl.concat('/all'.toString());
      await this.http.get(url)
        .subscribe((data) => {
          this.judges = data;
          console.log(data);
        });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  updateList(id: number, property: string, judge: object, event: any): void {
     const editField = event.target.textContent;
     this.judges[id][property] = editField;

     let requestUrl = this.baseUrl.concat('/'.toString());
     requestUrl = requestUrl.concat(String(id + 1).toString());
     judge[property] = editField;

     this.http.post(requestUrl, judge)
      .subscribe((data) => {
        console.log(data);
      });
  }

  changeValue(id: number, property: string, event: any): void {
    this.editField = event.target.textContent;
  }

}


