import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanfelloshipComponent } from './activities.component';

describe('WomanfelloshipComponent', () => {
  let component: WomanfelloshipComponent;
  let fixture: ComponentFixture<WomanfelloshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanfelloshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanfelloshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
