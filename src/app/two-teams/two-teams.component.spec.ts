import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTeamsComponent } from './two-teams.component';

describe('TwoTeamsComponent', () => {
  let component: TwoTeamsComponent;
  let fixture: ComponentFixture<TwoTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoTeamsComponent]
    });
    fixture = TestBed.createComponent(TwoTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
