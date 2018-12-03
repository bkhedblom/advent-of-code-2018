import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day2a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day2a.component.css']
})
export class Day2aComponent extends SolverBase{
  protected solve(inputArray: string[]): number {
    let twiceCount = 0, thriceCount = 0;
    inputArray.forEach(boxId => {
      let countedLetters = this.calculateLetterOccurances(boxId);
      if (countedLetters.someLetterAppearsExactlyTwice) {
        twiceCount++;
      }
      if (countedLetters.someLetterAppearsExactlyThrice) {
        thriceCount++;
      }
    });
    return twiceCount * thriceCount;
  }
  
  calculateLetterOccurances(boxId:string):LetterOccurances{
    const occursAtLeastOnce = new Set<string>();
    const occursAtLeastTwice = new Set<string>();
    const occursAtLeastThrice = new Set<string>();
    const occursMoreThanThreeTimes = new Set<string>();

    boxId.split('').forEach((letter)=>{
      if(occursMoreThanThreeTimes.has(letter))
        return;

      if(occursAtLeastThrice.has(letter)){
        occursMoreThanThreeTimes.add(letter);
        return;  
      }

      if (occursAtLeastOnce.has(letter) 
          && occursAtLeastTwice.has(letter)){
        occursAtLeastThrice.add(letter);
        return;
      }    
      if(occursAtLeastOnce.has(letter)){
        occursAtLeastTwice.add(letter);
        return;
      }
      occursAtLeastOnce.add(letter);
    });

    return{
      someLetterAppearsExactlyTwice: occursAtLeastTwice.size > occursAtLeastThrice.size,
      someLetterAppearsExactlyThrice: occursAtLeastThrice.size > occursMoreThanThreeTimes.size
    };
  }
}

interface LetterOccurances{
  someLetterAppearsExactlyTwice:boolean;
  someLetterAppearsExactlyThrice:boolean;
}
