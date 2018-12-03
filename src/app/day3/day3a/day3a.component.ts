import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day3a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day3a.component.css']
})
export class Day3aComponent extends SolverBase{
  protected solve(input: string[]): number {
    const fabric:number[][] = [[]];
    const claimSyntax = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
    let collisions = 0;
    input.forEach(claim => {
      var claimData = claim.match(claimSyntax);
      var startX = Number(claimData[2]);
      var startY = Number(claimData[3]);
      var lenX = Number(claimData[4]);
      var lenY = Number(claimData[5]);
      for (let x = startX; x < startX + lenX; x++) {
        for (let y = startY; y < startY + lenY; y++) {
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

