import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5aComponent } from './day5a.component';

describe('Day5aComponent', () => {
  let component: Day5aComponent;
  let fixture: ComponentFixture<Day5aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5aComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reduce adjacent of same type different polarity', () => {
    component.input = "aA";
    fixture.detectChanges();
    expect(component.solution).toBe(0);
  });

  it('should chain reducing', () => {
    component.input = "abBA";
    fixture.detectChanges();
    expect(component.solution).toBe(0);
  });

  it('should do nothing with adjacent of different type', () => {
    component.input = "abAB";
    fixture.detectChanges();
    expect(component.solution).toBe(4);
  });

  it('should do nothing with adjacent of same type but same polarity', () => {
    component.input = "aabAAB";
    fixture.detectChanges();
    expect(component.solution).toBe(6);
  });

  it('should solve example', () => {
    component.input = "dabAcCaCBAcCcaDA";
    fixture.detectChanges();
    expect(component.solution).toBe(10);
  })
});
