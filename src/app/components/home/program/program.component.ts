import { Component, OnInit } from '@angular/core';
import { ValentinProgram } from '../../../interfaces/program.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-program',
  imports: [NgClass],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent implements OnInit{
  programs: ValentinProgram[] = [
    {
      index: 1,
      title: "Petit Dejeuner Texan",
      description: "lorem ipsum",
      image: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      time: "08:00",
      active: true,
      top: true
    },
    {
      index: 2,
      title: "Promenade dans le parc",
      description: "lorem ipsum",
      image: "url('https://images.unsplash.com/photo-1770173047431-1af521ed5481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D')",
      time: "11:00",
      active: false,
      top: false
    },
    {
      index: 3,
      title: "Petit Dejeuner Texan",
      description: "lorem ipsum",
      image: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      time: "08:00",
      active: false,
      top: false
    },
    {
      index: 4,
      title: "Promenade dans le parc",
      description: "lorem ipsum",
      image: "url('https://images.unsplash.com/photo-1770173047431-1af521ed5481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D')",
      time: "11:00",
      active: false,
      top: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.autoSlide();
    }, 3000);
  }

  activeProgram(index: number){
    this.programs.map(program => program.top = false);
    
    this.programs[index-1].active = true;
    this.programs[index-1].top = true;
    
    setTimeout(() => {
      this.programs.filter((program) => program.index != index).map(program => program.active = false);
    }, 800);
  }

  autoSlide(){
    let index = this.programs.findIndex(program => program.active) + 1;
    if(index > 3) index = 0;
    this.activeProgram(index + 1);
    setTimeout(() => {
      this.autoSlide();
    }, 3000);
  }

}
