import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5bComponent } from './day5b.component';

describe('Day5bComponent', () => {
  let component: Day5bComponent;
  let fixture: ComponentFixture<Day5bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5bComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should solve example', () => {
    component.input = "dabAcCaCBAcCcaDA";
    fixture.detectChanges();
    expect(component.solution).toBe(4);
  })
});
