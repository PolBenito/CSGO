import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaComponent } from './arma.component';

describe('ArmaComponent', () => {
  let component: ArmaComponent;
  let fixture: ComponentFixture<ArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
