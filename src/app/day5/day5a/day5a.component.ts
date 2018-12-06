import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';
import { RegexpSolver } from '../regexp-solver';

@Component({
  selector: 'aoc-day5a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day5a.component.css']
})
export class Day5aComponent extends SolverBase{
  protected solve(input: string[]): number {
    return new RegexpSolver().solve(this.input);
  }


}
