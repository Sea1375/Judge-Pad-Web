import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToRecorderComponent } from './message-to-recorder.component';

describe('MessageToRecorderComponent', () => {
  let component: MessageToRecorderComponent;
  let fixture: ComponentFixture<MessageToRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageToRecorderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
