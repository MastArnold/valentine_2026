import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  imports: [NgClass, NgStyle],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss'
})
export class CvSectionComponent implements OnInit{
  photoTranslatePosition = 0;
  photoTranslateCalc = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.translateTimer();
    }, 3000);
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
