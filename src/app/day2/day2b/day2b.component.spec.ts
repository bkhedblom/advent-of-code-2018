import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2bComponent } from './day2b.component';

describe('Day2bComponent', () => {
  let component: Day2bComponent;
  let fixture: ComponentFixture<Day2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2bComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should solve example 0', () => {
    component.input = 
`abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`
    fixture.detectChanges();
    expect(component.solution).toBe("fgij");
  });
});
