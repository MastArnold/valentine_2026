import { Component, inject, OnInit, signal } from '@angular/core';
import { ValentinProgram } from '../../../interfaces/program.interface';
import { NgClass } from '@angular/common';
import { ProgramService } from '../../../services/program.service';

@Component({
  selector: 'app-program',
  imports: [NgClass],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent implements OnInit{
  programs: ValentinProgram[] = [];
  programService = inject(ProgramService);

  sliderCounter = signal(0);

  ngOnInit(): void {
    setInterval(() => {
      this.autoSlide();
    }, 3000);

    this.initPrograms();
  }

  initPrograms(){
    this.programService.initPrograms();
    this.programs = this.programService.programs$();
  }

  activeProgram(index: number){
    this.programs.map(program => program.top = false);
    
    this.programs[index].active = true;
    this.programs[index].top = true;
    
    setTimeout(() => {
      this.programs.filter((program) => program.index != (index+1)).map(program => program.active = false);
    }, 800);
  }

  autoSlide(){
    let index = this.programs.findIndex(program => program.active) + 1;
    if(index > (this.programs.length - 1)) index = 0;
    
    this.activeProgram(index);
  }

}
