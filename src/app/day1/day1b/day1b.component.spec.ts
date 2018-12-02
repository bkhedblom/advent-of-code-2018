import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1bComponent } from './day1b.component';

describe('Day1bComponent', () => {
  let component: Day1bComponent;
  let fixture: ComponentFixture<Day1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1bComponent);
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
    expect(component.solution).toBe(2);
  });
  
  it('solves example 1', () => {
    component.input = `+1
    -1`;
    fixture.detectChanges();
    expect(component.solution).toBe(0);
  });
  
  it('solves example 2', () => {
    component.input = `+3
    +3
    +4
    -2
    -4`;
    fixture.detectChanges();
    expect(component.solution).toBe(10);
  });
  
  it('solves example 3', () => {
    component.input = `-6
    +3
    +8
    +5
    -6`;
    fixture.detectChanges();
    expect(component.solution).toBe(5);
  });

  it('solves example 3', () => {
    component.input = `+7
    +7
    -2
    -7
    -4`;
    fixture.detectChanges();
    expect(component.solution).toBe(14);
  });
});
