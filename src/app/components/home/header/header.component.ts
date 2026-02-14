import { Component, ElementRef, HostListener, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { Lyric } from '../../../interfaces/lyric.interface';
import { AudioService } from '../../../services/audio.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  audioService = inject(AudioService);
  audioPlayed = false;
  initHeader = false;
  afterInit = false;

  lyricOverlay = signal(false);
  lyrics : Lyric[] = [];
  marker = signal(false);
  progressCover = 0;
  progressCupidon = 0;

  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  position = 0;
  speed = 0.3;

  ngOnInit(): void {
    this.audioService.play();
    this.initLyrics();
    setTimeout(() => this.startSlider());
    setTimeout(() => this.initHeader = true);
    setTimeout(() => this.afterInit = true, 2000);
  }

  ngOnDestroy(): void {
    this.audioService.pause();
  }

  playGrover() {
    if (this.audioPlayed) {
      this.audioService.pause();
      this.audioPlayed = false;
      return;
    }
    this.audioPlayed = true;
    this.audioService.play();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    const maxScrollCover = 500; 
    const maxScrollCupidon = 180; 
    this.progressCover = Math.min(scrollOffset / maxScrollCover, 1);
    this.progressCupidon = Math.min(scrollOffset / maxScrollCupidon, 1);
  }

  startSlider() {
    const trackEl = this.slider.nativeElement;
    const totalWidth = trackEl.scrollWidth / 2;

    const step = () => {
      this.position += this.speed;
      
      if (this.position >= totalWidth) {
        this.position = 0;
      }

      trackEl.style.transform = `translateX(-${this.position}px)`;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  doMarker(){
    this.marker.set(true);
    setTimeout(() => {
      this.marker.set(false);
      this.doMarker();
    }, 30000);
  }

  initLyrics(){
    this.lyrics = [
      {
        eng: "I see the crytal raindrops fall",
        fr: "Je vois les crytaux de pluies tomberrrr"
      },
      {
        eng: "And the beauty of it all",
        fr: "Et de toute sa beauté"
      },
      {
        eng: "When the sun comes shining through",
        fr: "Quand le soleil passe à travers"
      },
      {
        eng: "To make those rainbows in my minds",
        fr: "Pour faire ces arc-en-ciel dans ma tête"
      },
      {
        eng: "When i think of you sometimes",
        fr: "Quand je pense à toi souvent"
      },
      {
        eng: "And i wanna spend some times with you",
        fr: "Et je veux passer du temps avec toi"
      },
      {
        eng: "Juuuust the two of us (ahhhhhhhhhhh)",
        fr: "Juste tous les deux (mdr c'est trop nul en français)"
      },
      {
        eng: "We can make it we try",
        fr: "On peut le faire si on essaie"
      },
      {
        eng: "Just the two of us",
        fr: "Juste tous les deux"
      },
      {
        eng: "(Just the two of us)",
        fr: "(Juste tous les deux)"
      },
      {
        eng: "Juuuust the two of us",
        fr: "Juste tous les deux"
      },
      {
        eng: "Building castle in the sky",
        fr: "Construire un chateau dans le ciel"
      },
      {
        eng: "Just the two of us",
        fr: "Juste tous les deux"
      },
      {
        eng: "You and I ",
        fr: "Toi et moi"
      }
    ];
  }

}
