import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaotyComponent } from './naoty.component';

describe('NaotyComponent', () => {
  let component: NaotyComponent;
  let fixture: ComponentFixture<NaotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaotyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
