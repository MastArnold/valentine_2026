import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { CvSectionComponent } from "../cv-section/cv-section.component";

@Component({
  selector: 'app-main-page',
  imports: [NavComponent, HeaderComponent, CvSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
