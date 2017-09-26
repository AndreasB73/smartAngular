import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDemoComponent } from './other-demo.component';

describe('OtherDemoComponent', () => {
  let component: OtherDemoComponent;
  let fixture: ComponentFixture<OtherDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
