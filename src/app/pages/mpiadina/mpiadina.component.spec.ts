import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpiadinaComponent } from './mpiadina.component';

describe('MpiadinaComponent', () => {
  let component: MpiadinaComponent;
  let fixture: ComponentFixture<MpiadinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpiadinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpiadinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
