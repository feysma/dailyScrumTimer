import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() minutesInput: number = 2;
  @Output() timerFinished = new EventEmitter<void>();
  @Output() timerNuke = new EventEmitter<void>();
  intervalId: any;
  secondsInput: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  squareColor = "green";
  bigOverTime=false;
  private readonly squareSizeDefault: number = 50;
  squareSize: number = this.squareSizeDefault;

  displayGif: boolean = true;
  gifFiles: string[] = ['cezary2', 'stop-now', 'giphy', 'giphy1', 'giphy2', '200w', 'We3p', 'cezary', 'stop-the-count-donald-trump', 'europa-bell', 'sabliertimeisup', 'yeteetime'];
  currentGifIndex = 0;

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
        this.bigOverTimeLaunch();
      } else {
        this.seconds++;
      }
    }, 1000);
  }

  bigOverTimeLaunch() {
    const initialSquareSize = this.squareSize;
    this.squareSize = 350;
    this.bigOverTime = true;
    this.timerNuke.emit();
    const bigOverTimeId = setInterval(() => {
      this.bigOverTime = false;
      this.squareSize = initialSquareSize;
      clearInterval(bigOverTimeId);
    }, 5000);
  }
}
