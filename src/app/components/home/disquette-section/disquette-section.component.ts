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
    
    const maxScrollOne = this.elFirstOne.nativeElement.getBoundingClientRect().top + window.scrollY; 
    const maxScrollSecond = this.elSecondOne.nativeElement.getBoundingClientRect().top + window.scrollY; 
    const maxScrollThird = this.elThirdOne.nativeElement.getBoundingClientRect().top + window.scrollY; 

    this.firstOne = scrollOffset >= (maxScrollOne - 500);
    this.secondOne = scrollOffset >= (maxScrollSecond - 500);
    this.thirdOne = scrollOffset >= (maxScrollThird - 500);
  }

  initDisquette(){
    this.disquettes = [
      {
        id: 1,
        quotes: ["Les étoiles brillent", "Le c cédille", "Et toi tu m'emoustille"]
      },
      {
        id: 2,
        quotes: ["Tu serais pas un hérisson", "Par hasard ?", "Parce que tu as piqué mon coeur"]
      },
      {
        id: 3,
        quotes: ["La météo ne prévoyais pas d'orage", "pourtant", "j'ai eu le coup de foudre pour toi"]
      },
      {
        id: 4,
        quotes: ["Ah Oups !", "Le générateur est en panne...", "parce qu'il n'y a plus rien dans ma tête à part toi"]
      },
      {
        id: 5,
        quotes: ["Tu serais pas un moustique ?", "Parce que tu m'as piqué", "MDRRRRRRRRRRRRRRRRRRR"]
      },
      {
        id: 6,
        quotes: ["On dit que les noirs savent pas nager", "Pas étonnant que je me noie déjà dans tes yeux"]
      },
      {
        id: 7,
        quotes: ["J'ai cru que t'avais mis du parfum", "Mais en fait tu as pété", "ça sent bon"]
      }
    ];

    this.activeDisquette = this.disquettes[0];
  }

  getDisquette(){
    this.randomLoading = true;
    let next = this.activeDisquette.id + 1;
    if(next > 7){
      next = 1;
    }
    this.activeDisquette = this.disquettes.filter(disquette => disquette.id == next)[0];
    setTimeout(() => {
      this.randomLoading = false;
    }, 800);
  }

}
