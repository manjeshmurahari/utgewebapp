import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainslideimagesComponent } from './mainslideimages.component';

describe('MainslideimagesComponent', () => {
  let component: MainslideimagesComponent;
  let fixture: ComponentFixture<MainslideimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainslideimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainslideimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
