import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-give-auth-to-judge',
  templateUrl: './give-auth-to-judge.component.html',
  styleUrls: ['./give-auth-to-judge.component.scss']
})
export class GiveAuthToJudgeComponent implements OnInit {

  baseUrl = 'http://localhost:3001/api/auth';
  isLoading = false;
  judges: object = [];
  editField: string;
  available = new FormControl(null);

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

  async updateList(id: number, property: string, judge: object, event: any): Promise<any> {
    try {
      this.isLoading = true;
      const editField = event.target.textContent;
      this.judges[id][property] = editField;

      let requestUrl = this.baseUrl.concat('/'.toString());
      requestUrl = requestUrl.concat(String(id + 1).toString());

      judge[property] = editField;
      await this.http.post(requestUrl, judge )
        .subscribe((data) => {
          console.log(data);
        });
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
      let requestUrl = this.baseUrl.concat('/'.toString());
      requestUrl = requestUrl.concat(String(id + 1).toString());

      await this.http.post(requestUrl, { judge_available: this.available.value })
        .subscribe((data) => {
          console.log(data);
        });
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
