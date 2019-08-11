import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackrsvpComponent } from './trackrsvp.component';

describe('TrackrsvpComponent', () => {
  let component: TrackrsvpComponent;
  let fixture: ComponentFixture<TrackrsvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackrsvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackrsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
