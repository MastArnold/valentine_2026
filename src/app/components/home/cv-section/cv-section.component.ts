import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FunnyPhoto } from '../../../interfaces/funny-photo.interface';

@Component({
  selector: 'app-cv-section',
  imports: [],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss'
})
export class CvSectionComponent implements OnInit{
  funnyPhotos : FunnyPhoto[] = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/c4/be/66/c4be6664af3fe1a17ce2b0fb98c9bb1f.jpg',
      description: 'En cuisine.'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/5f/84/25/5f84255a83d8cdd41d7a8eb32c2c8b0b.jpg',
      description: 'Entrain de remuer ciel et terre pour toi.'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/56/0b/f1/560bf1027ba81347d397d32ca10c83dc.jpg',
      description: 'Je passe te chercher !'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/5e/89/c4/5e89c40ceca1e93aa35315df85cb539f.jpg',
      description: 'Prêt pour notre diner au chandèle ! Fais toi belle hein'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/27/8e/53/278e53485cd9372096cd96de2ae6c4c1.jpg',
      description: 'Connected by the lights...'
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/75/8a/c0/758ac055685417951355249fb3b2a229.jpg',
      description: 'Nous en lune de miel à la mer'
    }
  ]
  photoTranslatePosition = 0;
  photoTranslateCalc = '';

  @ViewChild('hearts') hearts! : ElementRef;
  heartsProgress = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.translateTimer();
    }, 3000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const heartsPosition = this.hearts.nativeElement.getBoundingClientRect().top + window.scrollY; 
    
    this.heartsProgress = Math.min(scrollOffset / heartsPosition, 1);
  }

  translateTimer(){
    this.photoTranslatePosition += 100;
    this.photoTranslateCalc = '-'+this.photoTranslatePosition+'% - '+(this.photoTranslatePosition/100)+'rem';
    
    if(this.photoTranslatePosition > 500){
      this.photoTranslatePosition = 0;
      this.photoTranslateCalc = '-'+this.photoTranslatePosition+'%';
    }
    
    setTimeout(() => {
      this.translateTimer();
    }, 3600);
  }

}
