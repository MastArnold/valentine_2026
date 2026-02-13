import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { ButtonPosition } from '../../interfaces/button-position.interface';

@Component({
  selector: 'app-intro',
  imports: [NgClass, NgStyle],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit{
  d4cVisible: boolean = false;
  btnNoVisible: boolean = true;
  audioService = inject(AudioService);

  readonly yesCount = 20;
  yesButtons: ButtonPosition[] = [];

  ngOnInit(): void {
    this.audioService.initFunny();
  }

  checkNo(){
    this.d4cVisible = true;
    this.audioService.playFunny();

    setTimeout(() => {
      this.generatePositions();
      this.d4cVisible = false;
      this.btnNoVisible = false;
      this.audioService.pauseFunny();
    }, 3000);
  }

  generatePositions() {
    this.yesButtons = Array.from({ length: this.yesCount }, () => ({
      // Génère un nombre entre 0 et 90 (pour éviter de déborder de l'écran)
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 95)}%`,
      delay: `${(Math.random() * 2).toFixed(2)}s`
    }));
  }
}
