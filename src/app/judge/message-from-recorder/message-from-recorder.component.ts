import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-from-recorder',
  templateUrl: './message-from-recorder.component.html',
  styleUrls: ['./message-from-recorder.component.scss']
})
export class MessageFromRecorderComponent implements OnInit {

  message: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
