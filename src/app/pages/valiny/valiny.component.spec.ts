import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValinyComponent } from './valiny.component';

describe('ValinyComponent', () => {
  let component: ValinyComponent;
  let fixture: ComponentFixture<ValinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
