import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockBasicComponent } from './dock-basic.component';

describe('DockBasicComponent', () => {
  let component: DockBasicComponent;
  let fixture: ComponentFixture<DockBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
