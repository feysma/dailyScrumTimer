import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;
  playSound() {
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.play();
  }

  @ViewChild('bigAudioPlayer') bigAudioPlayerRef!: ElementRef;
  playNukeSound() {
    const audioPlayer = this.bigAudioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.play();
  }
  
}
