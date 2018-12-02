import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day2b',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day2b.component.css']
})
export class Day2bComponent extends SolverBase{

  protected solve(input: string): string {
    const boxIds = this.splitStringByLine(input);
    for (const boxId of boxIds) {
      for (let posToRemove = 0; posToRemove < boxId.length; posToRemove++) {
        const firstPart = boxId.substring(0, posToRemove);
        const seconPArt = boxId.substring(posToRemove + 1, boxId.length);
        const almostSameId = boxIds.filter((otherId) => {
          if (otherId == boxId) {
            return false;
          }
          return otherId.substring(0, posToRemove) == firstPart 
              && otherId.substring(posToRemove + 1, otherId.length) == seconPArt;         
        });
        if(almostSameId.length == 1){
          return firstPart + seconPArt;
        }
      }
    }
    throw new Error("No matching IDs found");
  }


}
