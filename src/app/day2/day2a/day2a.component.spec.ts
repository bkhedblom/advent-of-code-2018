import { async, ComponentFixture, TestBed, ComponentFixtureNoNgZone } from '@angular/core/testing';

import { Day2aComponent } from './day2a.component';

describe('Day2aComponent', () => {
  let component: Day2aComponent;
  let fixture: ComponentFixture<Day2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2aComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('solves example 0', () => {
    component.input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;
    fixture.detectChanges();
    expect(component.solution).toBe(12);
  });

  it('should calculate if any letters appear exactly twice', () =>{
    expect(component.calculateLetterOccurances("abcdef").someLetterAppearsExactlyTwice).toBe(false);
    expect(component.calculateLetterOccurances("bababc").someLetterAppearsExactlyTwice).toBe(true);
    expect(component.calculateLetterOccurances("abbcde").someLetterAppearsExactlyTwice).toBe(true);
    expect(component.calculateLetterOccurances("abcccd").someLetterAppearsExactlyTwice).toBe(false);
    expect(component.calculateLetterOccurances("aabcdd").someLetterAppearsExactlyTwice).toBe(true);
    expect(component.calculateLetterOccurances("abcdee").someLetterAppearsExactlyTwice).toBe(true);
    expect(component.calculateLetterOccurances("ababab").someLetterAppearsExactlyTwice).toBe(false);
  });

  it('should calculate if any letters appear exactly thrice', () =>{
    expect(component.calculateLetterOccurances("abcdef").someLetterAppearsExactlyThrice).toBe(false);
    expect(component.calculateLetterOccurances("bababc").someLetterAppearsExactlyThrice).toBe(true);
    expect(component.calculateLetterOccurances("abbcde").someLetterAppearsExactlyThrice).toBe(false);
    expect(component.calculateLetterOccurances("abcccd").someLetterAppearsExactlyThrice).toBe(true);
    expect(component.calculateLetterOccurances("aabcdd").someLetterAppearsExactlyThrice).toBe(false);
    expect(component.calculateLetterOccurances("abcdee").someLetterAppearsExactlyThrice).toBe(false);
    expect(component.calculateLetterOccurances("ababab").someLetterAppearsExactlyThrice).toBe(true);
  });
});
