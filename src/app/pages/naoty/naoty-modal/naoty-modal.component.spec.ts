import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaotyModalComponent } from './naoty-modal.component';

describe('NaotyModalComponent', () => {
  let component: NaotyModalComponent;
  let fixture: ComponentFixture<NaotyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaotyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaotyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
