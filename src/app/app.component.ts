import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'valentine_2026';
  audioService = inject(AudioService);

  ngOnInit(): void {
    this.audioService.init();
  }
}
