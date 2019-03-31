import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeErrorComponent } from './home-error.component';

describe('HomeErrorComponent', () => {
  let component: HomeErrorComponent;
  let fixture: ComponentFixture<HomeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
