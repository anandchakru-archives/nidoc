import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharephotosComponent } from './sharephotos.component';

describe('SharephotosComponent', () => {
  let component: SharephotosComponent;
  let fixture: ComponentFixture<SharephotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharephotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
