import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtgcearlydaysComponent } from './utgcearlydays.component';

describe('UtgcearlydaysComponent', () => {
  let component: UtgcearlydaysComponent;
  let fixture: ComponentFixture<UtgcearlydaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtgcearlydaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtgcearlydaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
