import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4bComponent } from './day4b.component';

describe('Day4bComponent', () => {
  let component: Day4bComponent;
  let fixture: ComponentFixture<Day4bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4bComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should solve example', () =>{
    component.input =
`[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`
        fixture.detectChanges();
        expect(component.solution).toBe(4455);
      })
});
