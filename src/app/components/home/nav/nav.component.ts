import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  homeActive = signal(true);
  cvActive = signal(true);
  disquetteActive = signal(true);
  contactActive = signal(true);

}
