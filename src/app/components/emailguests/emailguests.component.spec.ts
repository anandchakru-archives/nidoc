import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailguestsComponent } from './emailguests.component';

describe('EmailguestsComponent', () => {
  let component: EmailguestsComponent;
  let fixture: ComponentFixture<EmailguestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailguestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
