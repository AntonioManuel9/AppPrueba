import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCsvComponent } from './group-csv.component';

describe('GroupCsvComponent', () => {
  let component: GroupCsvComponent;
  let fixture: ComponentFixture<GroupCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
