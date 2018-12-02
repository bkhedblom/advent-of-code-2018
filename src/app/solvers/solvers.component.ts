import { Component, OnInit } from '@angular/core';
import { InputService } from '../inputs/input.service';

@Component({
  selector: 'aoc-solvers',
  templateUrl: './solvers.component.html',
  styleUrls: ['./solvers.component.css']
})
export class SolversComponent implements OnInit {

  constructor(public input:InputService) { }

  ngOnInit() {
  }

}
