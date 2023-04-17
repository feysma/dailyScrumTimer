import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-timer',
  templateUrl: './global-timer.component.html',
  styleUrls: ['./global-timer.component.css']
})
export class GlobalTimerComponent implements OnInit, OnDestroy{
  intervalId: any;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    if (this.minutes === 0 && this.seconds === 0) {
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

  stopTimer() {
    clearInterval(this.intervalId);
  }

}
