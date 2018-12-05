import { Component, OnInit } from '@angular/core';
import { SolverBase } from 'src/app/solver-base';

@Component({
  selector: 'aoc-day5a',
  templateUrl: '../../shared/solver-template.html',
  styleUrls: ['./day5a.component.css']
})
export class Day5aComponent extends SolverBase{
  protected solve(input: string[]): number {
    return this.regexSolve(this.input);
  }
  regexSolve(input:string): number {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let regex = "(" + 
                alphabet.map(
                  (letter) => `(${letter}${letter.toUpperCase()}|${letter.toUpperCase()}${letter})`
                )
                .join("|")
              + ")";
    const reducable = new RegExp(regex, "g");
    let oldLen:number;
    do {
      oldLen = input.length;
      input = input.replace(reducable, "");
    } while (oldLen != input.length);

    return input.length;
  }

}
