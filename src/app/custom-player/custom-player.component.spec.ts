import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPlayerComponent } from './custom-player.component';

describe('CustomPlayerComponent', () => {
  let component: CustomPlayerComponent;
  let fixture: ComponentFixture<CustomPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
