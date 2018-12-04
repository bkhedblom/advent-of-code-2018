import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3bComponent } from './day3b.component';

describe('Day3bComponent', () => {
  let component: Day3bComponent;
  let fixture: ComponentFixture<Day3bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3bComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should solve example', () => {
    component.input = 
`#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`
    fixture.detectChanges();
    expect(component.solution).toBe(3)
  });
});
