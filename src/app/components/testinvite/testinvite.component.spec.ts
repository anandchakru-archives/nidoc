import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinviteComponent } from './testinvite.component';

describe('TestinviteComponent', () => {
  let component: TestinviteComponent;
  let fixture: ComponentFixture<TestinviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestinviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
