import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  progress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Ajustez le '500' pour définir après combien de pixels le bg est totalement étendu
    const maxScroll = 300; 
    this.progress = Math.min(scrollOffset / maxScroll, 1);
  }
}
