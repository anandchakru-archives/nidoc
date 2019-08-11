import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseinitComponent } from './firebaseinit.component';

describe('FirebaseinitComponent', () => {
  let component: FirebaseinitComponent;
  let fixture: ComponentFixture<FirebaseinitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseinitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
