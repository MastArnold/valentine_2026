import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { IcoHeartComponent } from "../../../svg/ico/ico-heart/ico-heart.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [NgClass, IcoHeartComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navBg: boolean = false;

  homeActive = signal(true);
  cvActive = signal(false);
  disquetteActive = signal(false);
  contactActive = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    const maxScrollCover = 100; 
    this.navBg = Math.min(scrollOffset / maxScrollCover, 1) == 1;
  }

  activeHome(){
    this.homeActive.set(true);
    this.cvActive.set(false);
    this.disquetteActive.set(false);
    this.contactActive.set(false);
  }

  activeCv(){
    this.homeActive.set(false);
    this.cvActive.set(true);
    this.disquetteActive.set(false);
    this.contactActive.set(false);
  }

  activeDisquette(){
    this.homeActive.set(false);
    this.cvActive.set(false);
    this.disquetteActive.set(true);
    this.contactActive.set(false);
  }

  activeContact(){
    this.homeActive.set(false);
    this.cvActive.set(false);
    this.disquetteActive.set(false);
    this.contactActive.set(true);
  }

}
