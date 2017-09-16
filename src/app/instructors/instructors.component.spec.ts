import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsComponent } from './instructors.component';

describe('InstructorsComponent', () => {
  let component: InstructorsComponent;
  let fixture: ComponentFixture<InstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
