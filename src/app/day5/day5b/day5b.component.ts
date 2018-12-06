import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';
import { RegexpSolver } from '../regexp-solver';

@Component({
  selector: 'aoc-day5b',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day5b.component.css']
})
export class Day5bComponent extends SolverBase{
  protected solve(input: string[]): string | number {
    return new RegexpSolver().findShortestSolution(this.input);
  }

}
