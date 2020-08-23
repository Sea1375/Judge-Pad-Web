import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorModel } from '../../core/models/color-model';

@Component({
  selector: 'app-communicate-with-judge',
  templateUrl: './communicate-with-judge.component.html',
  styleUrls: ['./communicate-with-judge.component.scss']
})
export class CommunicateWithJudgeComponent implements OnInit {

  isLoading = false;
  baseUrl = 'http://localhost:3001/api/score';
  judges: object = [];
  bntStyle: ColorModel[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getJudges();
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

  changeValue(id: number, property: string, event: any): void {
    this.judges[id][property] = event.target.textContent;

  }

  async send(id: number): Promise<any> {
    try {
      this.isLoading = true;
      let url = this.baseUrl.concat('/recorder/'.toString());
      url = url.concat(String(id + 1).toString());
      await this.http.post(url, this.judges[id])
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
