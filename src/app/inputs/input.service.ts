import { Injectable } from '@angular/core';
import { Day1a } from './data/day1a';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  day1a = new Day1a().data;
  constructor() { 
  }
}
