import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpiadinaModalComponent } from './mpiadina-modal.component';

describe('MpiadinaModalComponent', () => {
  let component: MpiadinaModalComponent;
  let fixture: ComponentFixture<MpiadinaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpiadinaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpiadinaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
