import { Injectable } from '@angular/core';
import { Day1 } from './data/day1';
import { Day2 } from './data/day2';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  day1a = new Day1().data;
  day1b = new Day1().data;
  day2a = new Day2().data;
  constructor() { 
  }
}
