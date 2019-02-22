import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYoutubeComponent } from './new-youtube.component';

describe('NewYoutubeComponent', () => {
  let component: NewYoutubeComponent;
  let fixture: ComponentFixture<NewYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
