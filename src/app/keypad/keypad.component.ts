import { Component, OnInit } from '@angular/core';

import { KeyService } from '../core/services/key.service';
import { KeyModel } from '../core/models/key-model';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  keys: KeyModel[];
  score: Number;

  constructor(
    private keyService: KeyService,
  ) {
  }

  ngOnInit(): void {
    this.getKeys();
    this.score = 0;
  }

  getKeys(): void {
    this.keyService.getKeys().subscribe(keys => this.keys = keys);
  }

  addKey(key: Number): void {
    if (key == 0.5) {
      this.score = Number(this.score) + Number(key);
    } else {
      this.score = key;
    }
  }

  clear(): void {
    this.score = 0;
  }

  submit(): void {

  }
}
