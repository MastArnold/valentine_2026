import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ico-heart',
  imports: [NgClass],
  templateUrl: './ico-heart.component.html',
  styleUrl: './ico-heart.component.scss'
})
export class IcoHeartComponent {
  @Input() svgClass: string = '';
}
