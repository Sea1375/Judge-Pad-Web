import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromRecorderComponent } from './message-from-recorder.component';

describe('MessageFromRecorderComponent', () => {
  let component: MessageFromRecorderComponent;
  let fixture: ComponentFixture<MessageFromRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFromRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFromRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
