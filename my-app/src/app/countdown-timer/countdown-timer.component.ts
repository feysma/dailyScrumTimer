import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() minutesInput: number = 1;
  @Output() timerFinished = new EventEmitter<void>();
  intervalId: any;
  secondsInput: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  squareColor = "green";
  private readonly squareSizeDefault: number = 50;
  squareSize: number = this.squareSizeDefault;

  displayGif: boolean = true;
  gifFiles: string[] = ['stop-now', 'giphy', 'giphy1', 'giphy2', '200w', 'We3p', 'stop-the-count-donald-trump'];
  currentGifIndex = 0;

  constructor() {
  }

  ngOnInit() {
    this.minutes = this.minutesInput;
    this.seconds = this.secondsInput;
    this.startRotation();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    if (this.minutes === this.minutesInput && this.seconds === this.secondsInput) {
      this.squareColor = "green";
      this.intervalId = setInterval(() => {
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
          if (this.minutes === 0 && this.seconds === 0) {
            clearInterval(this.intervalId);
            this.timerFinished.emit();
            this.startOverTimer();
          }
        }
      }, 1000);
    }
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.minutes = this.minutesInput;
    this.seconds = this.secondsInput;
    this.squareSize = this.squareSizeDefault;
    this.startTimer();
  }

  // Component code
  rotateGif() {
    this.currentGifIndex++;
    if (this.currentGifIndex >= this.gifFiles.length) {
      this.currentGifIndex = 0;
    }
  }

  // Component code
  startRotation() {
    setInterval(() => {
      this.displayGif = !this.displayGif;
      if (this.displayGif) {
        this.rotateGif();
      }
    }, 5000); // Rotate every 5 seconds
  }


  startOverTimer() {
    this.squareColor = "red";
    this.intervalId = setInterval(() => {
      this.squareSize += 5;
      if (this.seconds === 59) {
        this.minutes++;
        this.seconds = 0;
      } else {
        this.seconds++;
      }
    }, 1000);
  }
}
