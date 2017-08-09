import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllevateComponent } from './ellevate.component';

describe('EllevateComponent', () => {
  let component: EllevateComponent;
  let fixture: ComponentFixture<EllevateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllevateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllevateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
