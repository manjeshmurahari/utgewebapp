import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerrequestComponent } from './prayerrequest.component';

describe('PrayerrequestComponent', () => {
  let component: PrayerrequestComponent;
  let fixture: ComponentFixture<PrayerrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
