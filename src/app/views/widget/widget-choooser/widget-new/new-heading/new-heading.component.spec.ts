import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeadingComponent } from './new-heading.component';

describe('NewHeadingComponent', () => {
  let component: NewHeadingComponent;
  let fixture: ComponentFixture<NewHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
