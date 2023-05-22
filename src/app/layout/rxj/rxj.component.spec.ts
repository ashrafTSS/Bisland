import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjComponent } from './rxj.component';

describe('RxjComponent', () => {
  let component: RxjComponent;
  let fixture: ComponentFixture<RxjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
