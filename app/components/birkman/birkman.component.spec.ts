import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirkmanComponent } from './birkman.component';

describe('BirkmanComponent', () => {
  let component: BirkmanComponent;
  let fixture: ComponentFixture<BirkmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirkmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirkmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
