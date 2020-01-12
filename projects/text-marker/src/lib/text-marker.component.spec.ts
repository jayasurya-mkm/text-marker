import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMarkerComponent } from './text-marker.component';

describe('TextMarkerComponent', () => {
  let component: TextMarkerComponent;
  let fixture: ComponentFixture<TextMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
