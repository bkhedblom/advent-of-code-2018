import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';
import { Claim } from '../claim';

@Component({
  selector: 'aoc-day3b',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day3b.component.css']
})
export class Day3bComponent extends SolverBase{
  protected solve(input: string[]): number {
    const fabric:number[][][] = [[[]]];
    const conflictedIds = new Set<number>();
    const existingIds = new Set<number>();
    input.forEach(claimstring => {
      const claim = new Claim(claimstring)
      for (let x = claim.startX; x < claim.startX + claim.lenX; x++) {
        for (let y = claim.startY; y < claim.startY + claim.lenY; y++) {
          if(!fabric[x])
            fabric[x] = []
          if(!fabric[x][y])
            fabric[x][y] = []

          if(fabric[x][y].length){
            fabric[x][y].forEach(id => {
              if(!conflictedIds.has(id))
                conflictedIds.add(id)
            });
            conflictedIds.add(claim.id);
          }
          
          fabric[x][y].push(claim.id);
          existingIds.add(claim.id);          
        }
      }
    });
    const iterableIds = existingIds.values();
    let currentId = iterableIds.next();
    while(!currentId.done){
      if(!conflictedIds.has(currentId.value))
        return currentId.value;
      currentId = iterableIds.next()
    }
    throw new Error("No Id found");
  }  
}
