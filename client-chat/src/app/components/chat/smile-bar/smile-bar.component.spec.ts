import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileBarComponent } from './smile-bar.component';

describe('SmileBarComponent', () => {
  let component: SmileBarComponent;
  let fixture: ComponentFixture<SmileBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
