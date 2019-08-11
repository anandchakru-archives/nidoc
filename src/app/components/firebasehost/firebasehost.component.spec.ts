import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasehostComponent } from './firebasehost.component';

describe('FirebasehostComponent', () => {
  let component: FirebasehostComponent;
  let fixture: ComponentFixture<FirebasehostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasehostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasehostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
