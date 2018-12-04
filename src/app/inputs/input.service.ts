import { Injectable } from '@angular/core';
import { Day1 } from './data/day1';
import { Day2 } from './data/day2';
import { Day3 } from './data/day3';
import { Day4 } from './data/day4';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  day1 = new Day1().data;
  day2 = new Day2().data;
  day3 = new Day3().data;
  day4 = new Day4().data;
}
