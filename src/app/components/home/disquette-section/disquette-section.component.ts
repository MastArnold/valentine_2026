import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Disquette } from '../../../interfaces/disquette.interface';

@Component({
  selector: 'app-disquette-section',
  imports: [NgClass],
  templateUrl: './disquette-section.component.html',
  styleUrl: './disquette-section.component.scss'
})
export class DisquetteSectionComponent implements OnInit{

  firstOne : boolean = false;
  secondOne : boolean = false;
  thirdOne : boolean = false;

  disquettes: Disquette[] = [];
  activeDisquette: Disquette = {} as Disquette;
  randomLoading: boolean = false;

  @ViewChild('elDisquette') elDisquette! : ElementRef; 
  @ViewChild('elFirstOne') elFirstOne! : ElementRef; 
  @ViewChild('elSecondOne') elSecondOne! : ElementRef; 
  @ViewChild('elThirdOne') elThirdOne! : ElementRef; 

  ngOnInit(): void {
    this.initDisquette();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log("offset top : " + scrollOffset);
    
    const maxScrollOne = this.elFirstOne.nativeElement.getBoundingClientRect().top + window.scrollY; 
    console.log("maxScrollOne : " + maxScrollOne);
    const maxScrollSecond = this.elSecondOne.nativeElement.getBoundingClientRect().top + window.scrollY; 
    const maxScrollThird = this.elThirdOne.nativeElement.getBoundingClientRect().top + window.scrollY; 

    this.firstOne = scrollOffset >= (maxScrollOne - 500);
    this.secondOne = scrollOffset >= (maxScrollSecond - 500);
    this.thirdOne = scrollOffset >= (maxScrollThird - 500);
  }

  initDisquette(){
    this.disquettes = [
      {
        id: 0,
        quotes: ["les étoiles brillent", "le c cédille", "et toi tu m'emoustille"]
      },
      {
        id: 1,
        quotes: ["Tu serais pas un hérisson", "par hasard ?", "parce que tu as piqué mon coeur"]
      },
      {
        id: 2,
        quotes: ["La météo ne prévoyais pas d'orage", "pourtant", "j'ai eu le coup de foudre pour toi"]
      },
      {
        id: 4,
        quotes: ["Ah Oups !", "Le générateur est en panne...", "parce qu'il n'y a plus rien dans ma tête à part toi"]
      },
      {
        id: 5,
        quotes: ["Tu serais pas un moustique ?", "Parce que tu m'as piqué", "MDRRRRRRRRRRRRRRRRRRR"]
      }
    ];

    this.activeDisquette = this.disquettes[0];
  }

  getDisquette(){
    this.randomLoading = true;
    this.activeDisquette = this.disquettes[Math.floor(Math.random() * this.disquettes.length)];
    setTimeout(() => {
      this.randomLoading = false;
    }, 800);
  }

}
