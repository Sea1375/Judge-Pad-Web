import { Component, OnInit } from '@angular/core';

import { KeyModel } from '../../core/models/key-model';
import { KEYS } from '../../core/mock/mock-keys';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  keys: KeyModel[] = KEYS;
  score = 0;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  setScore(score: number): void {
    this.score = score === 0.5 ? this.score + score : score;
  }

  clear(): void {
    this.score = 0;
  }

  submit(): void {
    // TODO: send score to backend
  }
}
