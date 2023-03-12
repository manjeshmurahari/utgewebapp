import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotengComponent } from './boteng.component';

describe('BotengComponent', () => {
  let component: BotengComponent;
  let fixture: ComponentFixture<BotengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
