import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day4b',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day4b.component.css']
})
export class Day4bComponent  extends SolverBase{
  sortedInput:string[]
  
  protected solve(input: string[]): number {
    this.sortedInput = input.sort();
    const guardIdentifier = /Guard #(\d+) begins/;
    const asleepTime = /\[[\d- ]+:(\d\d)\] falls asleep/;
    const wakeUpTime = /\[[\d- ]+:(\d\d)\] wakes up/;
    
    const guards:Guard[] =[];
    const sleepiestGuards:Guard[] = [];
    let sleepiestMinute = 0;
    let currentGuard:Guard;
    let minuteFallenAsleep:number;
    this.sortedInput.forEach(logpost => {
      const newGuardMatch = logpost.match(guardIdentifier);
      if (newGuardMatch) {        
          const id = Number(newGuardMatch[1]);
          if (!guards[id]) {
            guards[id] = new Guard(id);
          }
          currentGuard = guards[id];   
          return; 
        } 
        const asleepTimeMatch = logpost.match(asleepTime);
        if (asleepTimeMatch) {
          minuteFallenAsleep = Number(asleepTimeMatch[1]);
          return;
        }
        
        const minuteAwoken = Number(logpost.match(wakeUpTime)[1]);
        for (let minute = minuteFallenAsleep; minute < minuteAwoken; minute++) {
          currentGuard.sleepTimesPerMinute[minute]++
          if (!sleepiestGuards[sleepiestMinute]
             || currentGuard.sleepTimesPerMinute[minute] 
             > sleepiestGuards[sleepiestMinute].sleepTimesPerMinute[sleepiestMinute]) {
            sleepiestMinute = minute;
            sleepiestGuards[sleepiestMinute] = currentGuard;
          }
        }
    });
    return sleepiestGuards[sleepiestMinute].id * sleepiestMinute;
  }

}

class Guard{
  constructor(public id:number){  }
  sleepTimesPerMinute:number[] = Array(60).fill(0);
}
