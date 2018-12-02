import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1aComponent } from './day1a.component';

describe('Day1aComponent', () => {
  let component: Day1aComponent;
  let fixture: ComponentFixture<Day1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1aComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('solves example 0', () => {
    component.input = `+1
    -2
    +3
    +1`;
    fixture.detectChanges();
    expect(component.solution).toBe(3);
  });
  
  it('solves example 1', () => {
    component.input = `+1
    +1
    +1`;
    fixture.detectChanges();
    expect(component.solution).toBe(3);
  });
  
  it('solves example 2', () => {
    component.input = `+1
    +1
    -2`;
    fixture.detectChanges();
    expect(component.solution).toBe(0);
  });
  
  it('solves example 3', () => {
    component.input = `-1
    -2
    -3`;
    fixture.detectChanges();
    expect(component.solution).toBe(-6);
  });
});
