import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-to-recorder',
  templateUrl: './message-to-recorder.component.html',
  styleUrls: ['./message-to-recorder.component.scss']
})
export class MessageToRecorderComponent implements OnInit {

  message: String;

  constructor() {
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.message = '';
  }

  submit(): void {

  }

}
