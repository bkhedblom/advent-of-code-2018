import { Component, OnInit, Input } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day1a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day1a.component.css']
})
export class Day1aComponent extends SolverBase {

  protected solve(input:string[]): number {    
    return this.toNumbers(input)
      .reduce((sum, value) => sum + value);
  }
}
