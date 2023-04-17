import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() minutesInput: number = 2;
  @Output() timerFinished = new EventEmitter<void>();
  intervalId: any;
  secondsInput: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit() {
    this.minutes = this.minutesInput;
    this.seconds = this.secondsInput;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    if (this.minutes === this.minutesInput && this.seconds === this.secondsInput) {
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.intervalId);
          this.timerFinished.emit();
          this.startOverTimer();
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }
}

  resetTimer() {
    clearInterval(this.intervalId);
    this.minutes = this.minutesInput;
    this.seconds = this.secondsInput;
    this.startTimer();
  }

  startOverTimer() {
    this.intervalId = setInterval(() => {
      if (this.seconds === 59) {
        this.minutes++;
        this.seconds = 0;
      } else {
        this.seconds++;
      }
    }, 1000);
  }
}
