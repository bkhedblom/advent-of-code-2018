import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4aComponent } from './day4a.component';

describe('Day4aComponent', () => {
  let component: Day4aComponent;
  let fixture: ComponentFixture<Day4aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4aComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by date', () => {
    const firstText = "[1518-11-01 00:00] Guard #10 begins shift";
    const secondText = "[1518-11-01 00:05] falls asleep";
    const thirdText = "[1518-11-01 00:25] wakes up";
    component.input =
`${thirdText}
${firstText}
${secondText}`;
    fixture.detectChanges();

    expect(component.sortedInput[0]).toBe(firstText);
    expect(component.sortedInput[1]).toBe(secondText);
    expect(component.sortedInput[2]).toBe(thirdText);
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
    expect(component.solution).toBe(240);
  })
});
