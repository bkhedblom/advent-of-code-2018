import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aoc-day1a',
  templateUrl: './day1a.component.html',
  styleUrls: ['./day1a.component.css']
})
export class Day1aComponent implements OnInit {

  @Input() input:string;
  solution:number;
  constructor() { }

  ngOnInit() {
    this.solve();
  }
  solve(): void {
    this.solution = this.input
      .split("\n")
      .map((value) => Number(value))
      .reduce((sum, value) => sum + value);
  }

}
