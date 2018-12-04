import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';
import { Claim } from '../claim';

@Component({
  selector: 'aoc-day3a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day3a.component.css']
})
export class Day3aComponent extends SolverBase{
  protected solve(input: string[]): number {
    const fabric:number[][] = [[]];
    let collisions = 0;
    input.forEach(claimstring => {
      const claim = new Claim(claimstring)
      for (let x = claim.startX; x < claim.startX + claim.lenX; x++) {
        for (let y = claim.startY; y < claim.startY + claim.lenY; y++) {
          if(!fabric[x])
            fabric[x] = []

          if(!fabric[x][y]){
            fabric[x][y] = 1;
            continue;
          }
          if(fabric[x][y]++ == 1)
            collisions++;
        }                
      }
    });
    return collisions;
  }

}

