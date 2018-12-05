import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day5a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day5a.component.css']
})
export class Day5aComponent extends SolverBase{
  protected solve(input: string[]): string | number {
    input = this.input.split("");
    for (let i = 0; i < input.length - 1; i++) {
      const current = input[i];
      if(!current) continue;
      let next:string;
      let k = 0;
      while(!next){
        k++;
        next = input[i + k];
      } 
      if (current != next && current.toLowerCase() == next.toLowerCase()) {
        input[i] = input[i+k] = undefined;
        if (i < 1) {
          i = -1
        } else {
          i =- 2;
        }
      }
    }
    return input.filter((x) => x).length;
  }

}
