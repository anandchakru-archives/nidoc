import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiviteinitComponent } from './niviteinit.component';

describe('NiviteinitComponent', () => {
  let component: NiviteinitComponent;
  let fixture: ComponentFixture<NiviteinitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiviteinitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiviteinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
