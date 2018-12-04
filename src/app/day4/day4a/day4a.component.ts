import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day4a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day4a.component.css']
})
export class Day4aComponent extends SolverBase{
  sortedInput:string[]
  
  protected solve(input: string[]): number {
    this.sortedInput = input.sort();
    const guardIdentifier = /Guard #(\d+) begins/;
    const asleepTime = /\[[\d- ]+:(\d\d)\] falls asleep/;
    const wakeUpTime = /\[[\d- ]+:(\d\d)\] wakes up/;
    
    const guards:Guard[] =[];
    let sleepiestGuard = new Guard(null);
    let currentGuard:Guard;
    let minuteFallenAsleep:number;
    this.sortedInput.forEach(logpost => {
      const newGuardMatch = logpost.match(guardIdentifier);
      if (newGuardMatch) {
        if (currentGuard 
          && currentGuard.totalMinutesAsleep > sleepiestGuard.totalMinutesAsleep) {
            sleepiestGuard = currentGuard;
          }
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
        const minutesAsleep = minuteAwoken - minuteFallenAsleep;
        currentGuard.totalMinutesAsleep += minutesAsleep;
        for (let minute = minuteFallenAsleep; minute < minuteAwoken; minute++) {
          currentGuard.sleepTimesPerMinute[minute]++
          if (currentGuard.sleepTimesPerMinute[minute] > currentGuard.sleepiestValue) {
            currentGuard.sleepiestMinute = minute;
          }
        }

    });
    return sleepiestGuard.id * sleepiestGuard.sleepiestMinute;
  }

}

class Guard{
  constructor(public id:number){  }
  totalMinutesAsleep = 0;
  sleepTimesPerMinute:number[] = Array(60).fill(0);
  sleepiestMinute = 0;
  get sleepiestValue(){ return this.sleepTimesPerMinute[this.sleepiestMinute]}
}
