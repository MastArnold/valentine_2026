import { Component, OnInit, signal } from '@angular/core';
import { Lyric } from '../../../interfaces/lyric.interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  lyricOverlay = signal(false);
  lyrics : Lyric[] = [];

  ngOnInit(): void {
    this.initLyrics();
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
