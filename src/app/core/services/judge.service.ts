import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { JudgeModel } from '../models/judge-model';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {

  judges: object = [];
  scores: object = [];
  score: object;
  isValid: object;

  constructor(
    private http: HttpClient
  ) {
    http.get('http://localhost:3001/api/auth/all').subscribe((data) => {
      this.judges = data;
    });
  }

  getJudges(): Observable<any> {
    this.http.get('http://localhost:3001/api/auth/all').subscribe((data) => {
      this.judges = data;
      console.log('first', this.judges);
    });
    console.log('second', this.judges);
    return of(this.judges);
  }

  getJudge(judgeId: number): Observable<JudgeModel> {
    return of(this.judges[judgeId]);
  }

  checkValid(judgeId: number, judge: JudgeModel): Observable<any> {
    let url = 'http://localhost:3001/api/auth/valid/';
    url = url.concat(String(judgeId + 1).toString());
    this.http.post(url, { judge_email: judge.judge_email, judge_password: judge.judge_password })
      .subscribe((data) => {
        this.isValid = data;
        console.log(data);
      });
    return of(this.isValid);
  }

  setJudge(judgeId: number, data: object): Observable<any> {
    let requestUrl = 'http://localhost:3001/api/auth/';
    requestUrl = requestUrl.concat(String(judgeId + 1).toString());
    this.http.post(requestUrl, data)
      .subscribe((resData) => {
        console.log(resData);
      });
    return of(true);
  }

  getScores(): Observable<any> {
    const url = 'http://localhost:3001/api/score/all';
    this.http.get(url).subscribe((data) => {
        this.scores = data;
      });
    return of();
  }

  getScore(judgeId: number): Observable<any> {
    let url = 'http://localhost:3001/api/score/';
    url = url.concat(String(judgeId + 1).toString());
    this.http.get(url).subscribe((data) => {
      this.score = data;
    });
    return of(this.score);
  }

  setMessageToJudge(judgeId: number, score: object): Observable<any> {
    let url = 'http://localhost:3001/api/score/recorder/';
    url = url.concat(String(judgeId + 1).toString());
    this.http.post(url, score).subscribe((data) => {
        console.log(data);
      });
    return of();
  }

  setDataFromJudge(judgeId: number, score: object): Observable<any> {
    let url = 'http://localhost:3001/api/score/judge/';
    url = url.concat(String(judgeId).toString());
    this.http.post(url, score)
      .subscribe((data) => {
        console.log(data);
      });
    return of(true);
  }
}
