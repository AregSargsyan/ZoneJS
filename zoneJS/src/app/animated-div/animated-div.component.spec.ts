import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedDivComponent } from './animated-div.component';

describe('AnimatedDivComponent', () => {
  let component: AnimatedDivComponent;
  let fixture: ComponentFixture<AnimatedDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
