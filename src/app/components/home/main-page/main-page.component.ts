import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { CvSectionComponent } from "../cv-section/cv-section.component";
import { ProgramComponent } from "../program/program.component";
import { DisquetteSectionComponent } from "../disquette-section/disquette-section.component";

@Component({
  selector: 'app-main-page',
  imports: [NavComponent, HeaderComponent, CvSectionComponent, ProgramComponent, DisquetteSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
