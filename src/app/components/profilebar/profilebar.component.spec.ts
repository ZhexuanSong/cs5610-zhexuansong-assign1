import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilebarComponent } from './profilebar.component';

describe('ProfilebarComponent', () => {
  let component: ProfilebarComponent;
  let fixture: ComponentFixture<ProfilebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
