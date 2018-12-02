import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day1b',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day1b.component.css']
})
export class Day1bComponent extends SolverBase {
  protected solve(input: string): number {
    const numbers = this.splitToNumberArray(input);
    const foundFreqs = new Set<number>();
    let currentFreq = 0, i = 0;
    while (!foundFreqs.has(currentFreq)) {
      foundFreqs.add(currentFreq);
      currentFreq += numbers[i++ % numbers.length];
    }
    return currentFreq;
  }

}
