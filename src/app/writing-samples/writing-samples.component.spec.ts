import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingSamplesComponent } from './writing-samples.component';

describe('WritingSamplesComponent', () => {
  let component: WritingSamplesComponent;
  let fixture: ComponentFixture<WritingSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
