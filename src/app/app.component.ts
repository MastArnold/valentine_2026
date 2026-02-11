import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from "./components/intro/intro.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'valentine_2026';
}
