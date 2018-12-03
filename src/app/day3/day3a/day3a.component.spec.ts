import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3aComponent } from './day3a.component';

describe('Day3aComponent', () => {
  let component: Day3aComponent;
  let fixture: ComponentFixture<Day3aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3aComponent);
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
    expect(component.solution).toBe(4)
  });
});
