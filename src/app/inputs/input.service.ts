import { Injectable } from '@angular/core';
import { Day1 } from './data/day1';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  day1a = new Day1().data;
  day1b = new Day1().data;
  constructor() { 
  }
}
