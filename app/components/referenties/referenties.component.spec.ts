import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentiesComponent } from './referenties.component';

describe('ReferentiesComponent', () => {
  let component: ReferentiesComponent;
  let fixture: ComponentFixture<ReferentiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
