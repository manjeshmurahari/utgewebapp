import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoandaddsComponent } from './logoandadds.component';

describe('LogoandaddsComponent', () => {
  let component: LogoandaddsComponent;
  let fixture: ComponentFixture<LogoandaddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoandaddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoandaddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
